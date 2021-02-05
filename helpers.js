const fs = require('fs');

exports.getTest = async (dirname, onError) => {
  const files = await new Promise(resolve => {
    fs.readdir(dirname, (err, filenames) => {
      resolve(filenames);
      if (err) {
        onError(err);
        return;
      }
    });
  });

  const filtredFiles = files.filter(validFormat);

  let result = [];

  for (let index = 0; index < filtredFiles.length; index++) {
    const fileName = filtredFiles[index];
    const fileArray = fileName.split('.');
    if (fileArray.length < 3) {
      return false;
    }
    const fileIndex = fileArray[1];
    const fileDestination = fileArray[2];

    const fileContent = await new Promise(resolve => {
      fs.readFile(dirname + fileName, { encoding: 'utf-8' }, (err, data) => {
        resolve(data);
      });
    });

    result[fileIndex] = {
      ...result[fileIndex],
      [fileDestination]: fileContent,
      name: 'test.' + fileIndex
    };
  }

  return result;
};

const validFormat = s => {
  return s.indexOf('in') !== -1 || s.indexOf('out') !== -1;
};
