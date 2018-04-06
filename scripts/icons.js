import fs from "fs";

/**
 * Get a generator for file names contained in a directory an subdirectories.
 * The file names contain their relative path.
 * @param dir {String} - the directory where to look for files.
 * @param filter {Function} - optional, a function to filter on file names. Defaults to no filter.
 * @return a generator for files names
 */
function readIcons() {
  // Check directory existence
  const nameFilter = (fileName) => (fileName.endsWith(".svg"))
  return _readIcons("icons/", nameFilter);
}

/**
 * Get a generator for file names contained in a directory an subdirectories.
 * The file names contain their relative path.
 * @param dir {String} - the directory where to look for files
 * @param filter {Function} - a function to filter on file names. If undefined, defaults to no filter.
 * @return a generator for files names
 * @private
 */

function * _readIcons(dir, filter) {
  for (let icon of fs.readdirSync(dir)) {
    if (filter(icon)) yield icon;
  }
}

let icons = [];

for (let icon of readIcons()) {
  icons = [...icons, icon]
}

export default icons;
