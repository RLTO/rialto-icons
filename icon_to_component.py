import glob
import os.path
import subprocess
import re

def svgo():
  subprocess.call([
    'node',
    './node_modules/svgo/bin/svgo',
    '-f',
    './icons',
    '-o',
    './svgo'
  ])

def read_svgs():
  svgo()

  svgs = {}
  svg_files = [f for f in glob.glob("./svgo/*.svg")]
  for svg in svg_files:
    svgs[_without_extension(_to_camel_case(os.path.basename(svg)))] = open(svg, "r").read()
  return svgs

def _to_camel_case(filename):
    words = filename.split('-')
    return ''.join(x.title() for x in words[0:]).replace("_", "").replace(" ", "")

def _without_extension(filename):
  return filename[0:-4]

def _fix_xmlns_xlink(svg, attr):
  attr_index = svg.find(attr + ':')
  while(attr_index != -1):
    semicol_index = attr_index + len(attr)
    # remove ':' and capitalize next letter
    svg = svg[:semicol_index] + svg[semicol_index + 1].upper() + svg[semicol_index+2:]
    attr_index = svg.find(attr + ':')
  return svg

def _get_fill_default(svg):
  match = re.search('fill=("#[a-fA-F0-9]{6}")', svg)
  if (match):
    return "fill: {fill},".format(fill = match.groups()[0])
  else:
    return ""

def _get_stroke_default(svg):
  match = re.search('stroke=("#[a-fA-F0-9]{6}")', svg)
  if (match):
    return "stroke: {stroke},".format(stroke = match.groups()[0])
  else:
    return ""

def _replace_fill_stroke(svg):
  svg = re.sub('fill="#[a-fA-F0-9]{6}"', 'fill={fill}', svg)
  svg = re.sub('stroke="#[a-fA-F0-9]{6}"', 'stroke={stroke}', svg)
  return svg

def _camel_case_attrs(svg):
    return svg.replace("fill-rule", "fillRule") \
              .replace("stroke-linecap", "strokeLinecap") \
              .replace("stroke-linejoin", "strokeLinejoin") \
              .replace("stroke-width", "strokeWidth") \
              .replace("fill-opacity", "fillOpacity") \
              .replace("font-family", "fontFamily") \
              .replace("font-size", "fontSize") \
              .replace("font-weight", "fontWeight")

def create_component(name, svg):
    default_fill = _get_fill_default(svg)
    default_stroke = _get_stroke_default(svg)
    svg = _fix_xmlns_xlink(svg, 'xmlns')
    svg = _fix_xmlns_xlink(svg, 'xlink')
    svg = _camel_case_attrs(svg)
    svg = _replace_fill_stroke(svg)
    componentString = '''import React from "react";
import PropTypes from "prop-types";
import getIconStyle from "./iconStyle.js";

const {name} = (props) => {{
  const {{ dimensions, onClick, size, fill, stroke, ...otherProps }} = props;
  return (
    <svg style={{{{ ...getIconStyle(size), ...dimensions }}}} onClick={{onClick}} {{...otherProps}}>
      {svg}
    </svg>
  );
}};

{name}.propTypes = {{
  size: PropTypes.string,
  onClick: PropTypes.func,
  dimensions: PropTypes.shape({{
    height: PropTypes.string,
    width: PropTypes.string,
  }}),
  fill: PropTypes.string,
  stroke: PropTypes.string,
}};

{name}.defaultProps = {{
  {default_fill}
  {default_stroke}
}};

export default {name};
'''.format(
        name = name,
        svg = svg,
        default_fill = default_fill,
        default_stroke = default_stroke
    )
    return componentString

def write_component(name, component):
  open("./dist/{}.js".format(name), "w").write(component)

def create_index_file(react_components):
  import_string = ''
  for componentName in react_components:
      import_string += 'import {componentName} from "{componentPath}";\n'.format(
          componentName=componentName,
          componentPath='./'+componentName)
  import_string += '\nexport {'
  for componentName in react_components:
      import_string += '\n\t{componentName},'.format(componentName=componentName)
  import_string += '\n}'
  return import_string

if __name__ == "__main__":
  svgs = read_svgs()
  for svg in svgs:
    write_component(svg, create_component(svg, svgs[svg]))
  write_component('index', create_index_file(svgs))
