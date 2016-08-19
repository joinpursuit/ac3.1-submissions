const fs = require('fs');
const dir = require('node-dir');

let studentsArr = ['Ahsan Abbasi',
'Ambar Gutierrez',
'Brett Settles',
'Bryan Bethea',
'Carlos Martinez',
'Chanice Stlouis',
'Christopher Sancho',
'Craig Dejean',
'Daniel Sangobanwo',
'Darlene Sterling',
'Esmeralda Reyes',
'Gabriel Barriga',
'Iliass Sabillah',
'Jonathan Wu',
'Joshua Fermin',
'Jung Chen',
'Lisa Kang',
'Luis marcial',
'Matthew Jennings',
'Melanie Williams',
'Michael Dinnall',
'Nasita Haque',
'Nicole Bella Lewis',
'Nyapal Gatkuoth',
'Parth Jhaveri',
'Quan Vuong',
'Rabiya Watson-Maiorana',
'Ruben Gil',
'Salina Fu',
'Samantha Bretous',
'Shazia Anjum',
'Tionna Wilson-Pierce',
'Vanessa Montoya',
'Victor Amos'];

function mapStudentsArr(arr){
  return arr.map(function(name){
    return name.toLowerCase().replace(/[\s]/,'-');
  })
}

function makeStudentDirs(arr) {
  arr.forEach(function(student){
    fs.mkdir(student);
  })
}

function getSubDirectory() {
  var folderPath = `${__dirname}/submissions`;
  var newSubdirs;
  dir.subdirs(folderPath, function(err, subdirs) {
    if (err) throw err;
    // console.log(subdirs)
    newSubdirs = subdirs;
  });
  return newSubdirs
}

function makeWeeklyDirectory(weekNumber, directoryList) {
  var folderPath = `${__dirname}/submissions`;
  dir.subdirs(folderPath, function(err, subdirs) {
    if (err) throw err;
    subdirs.forEach(function(directory){
      var newDir = `${directory}/week-${weekNumber}`;
      fs.mkdir(newDir);
    })
  });
}

// getElementsByName('name')FileDirectory(__dirname);

makeWeeklyDirectory(5);
// console.log(getSubDirectory())

//Make top-level student directories:
//makeStudentDirs(mapStudentsArr(studentsArr));
