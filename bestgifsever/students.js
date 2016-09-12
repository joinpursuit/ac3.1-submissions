var fs = require('fs')

var students = [
  "ambar_gutierrez",
  "bryan_bethea",
  "carlos_martinez",
  "chanice_st_louis",
  "christopher_sancho",
  "craig_dejean",
  "daniel_sangobanwo",
  "darlene_sterling",
  "esmerelda_reyes",
  "gabriel_barriga",
  "iliass_sabillah",
  "jonathan_wu",
  "joshua_fermin",
  "jung_chen",
  "lisa_kang",
  "luis_marcial",
  "matthew_jennings",
  "melanie_williams",
  "michael_dinnall",
  "nasita_haque",
  "nicole_bella_lewis",
  "nyapal_gatkuoth",
  "parth_jhaveri",
  "quan_vuong",
  "rabiya_watson_maiorana",
  "ruben_gil",
  "salina_fu",
  "samantha_bretous",
  "shazia_anjum",
  "tionna_wilson_pierce",
  "vanessa_montoya",
  "victor_amos"
]

for(var i = 0; i < students.length; i++) {
  fs.mkdir('./' + students[i], function(err){
     if (err) {
         return console.error(err);
     }
  });
}

for(var i = 0; i < students.length; i++) {
  fs.writeFile('./' + students[i] + '/' + 'bio.txt', "Name: \n Favorite Movie: \n Favorite Food: \n Favorite Candy:");
}
