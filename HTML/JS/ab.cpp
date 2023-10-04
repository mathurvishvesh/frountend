<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        img {

            height: 300px;
            width: 280px;
        }

        .container{

            display: inline-block;
            padding: 5px;
            
        }
    </style>
</head>

<body>



    <script>


        /* setInterval(function () {
 
             document.write("Hello")
 
         },1000) */


        /* setTimeout(function(){
              
             console.log("Hello")
         },3000) */



        /*   function prom(a) {
   
               return new Promise(function (resolve, reject) {
   
   
                   console.log('fetching data ..........')
   
   
                   setTimeout(function () {
   
                       if (a) {
   
                           resolve('Promise pura huaa')
                       }
   
                       else {
   
                           reject('Goli de gye')
                       }
   
   
                   },3000)
                   console.log("Hello Mohit")
               })
   
   
   
   
           }
   
   
           prom(true).then(function (result) {
   
               console.log(result)
           }).catch(function (error) {
   
               console.log(error)
           })
   
           */

        fetch('https://dummyjson.com/products').then((respone) => {

            return respone.json()

        }).then((data) => {

            for (let i of data.products) {


               console.log(i)

                let image = document.createElement('img');
                image.src = i.images[0]

                let div = document.createElement('div');
                div.setAttribute('class','container')
                div.append(image)

                let h3 = document.createElement('h3');
                h3.innerHTML = i.title
                div.append(h3)

                let h4 = document.createElement('h4');
                h4.innerHTML = "RS :" + i.price
                div.append(h4)

                let p = document.createElement('p');
                p.innerHTML = i.description.slice(0,30)
                div.append(p)

                document.body.append(div)


            }
        })




    </script>

</body>

</html>