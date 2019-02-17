
  function showOne(one){
   return ` <!DOCTYPE html>
    <html>
      <head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <title>Plantr</title>
        <!-- other metadata, links to css -->
      </head>
      <body>
        <!-- main html content -->
        
        <b>Hey I am your friendly kinder-gardener ${one.name}</b> </br>
        <p>I am ${one.age}-years old. I own this plot! That's right! Its ${one.plot.size} sq ft big.</br>
        I grow ${one.plot.vegetables.map((veg)=>veg.name).join('')} on my plot by toiling day and night. </br>
        Also, my favorite vegetable is ${one.favorite_vegetable.name} because it's ${one.favorite_vegetable.color} in color :) </p>
      </body>
    </html>`
}

function showAll(all){
  
  return ` <!DOCTYPE html>
  <html>
    <head>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
      <title>Plantr</title>
      <!-- other metadata, links to css -->
    </head>
    <body>
      <!-- main html content -->
      <b> Lets meet our kinder-gardeners!</b>
      <ul>
      ${all.map(val=>
        `<li><a href="/gardener/${val.name}">${val.name}</a></li>`
      ).join('')}
      </ul>
     
    </body>
  </html>`
}

module.exports = {showOne, showAll}