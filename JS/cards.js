var sample=[{
    "image":"./world.png",
    "kname":"25 21",
    "kgenre":"trauma"
},
{
    "image":"world.png",
    "kname":"25 22",
    "kgenre":"trauma"
},
{
    "image":"world.png",
    "kname":"25 23",
    "kgenre":"trauma"
},
{
    "image":"world.png",
    "kname":"25 24",
    "kgenre":"trauma"
},
{
    "image":"world.png",
    "kname":"25 25",
    "kgenre":"trauma"
},
{
    "image":"world.png",
    "kname":"25 21",
    "kgenre":"trauma"
},
{
    "image":"Bird.png",
    "kname":"25 22",
    "kgenre":"trauma"
},
{
    "image":"Bird.png",
    "kname":"25 23",
    "kgenre":"trauma"
},
{
    "image":"Bird.jpeg",
    "kname":"25 24",
    "kgenre":"trauma"
},
{
    "image":"Bird.jpeg",
    "kname":"25 24",
    "kgenre":"trauma"
}
]

var some= sample.map((ele)=>{
    return (`<div class="card">
            <div class="image">
                <img src="${ele.image}">
            </div>
            <div class="content-box">
                <div>${ele.kname}</div>
                <div>${ele.kgenre}</div>
            </div>
        </div>
    `)
})

var par=document.querySelector(".cards-parent")
par.innerHTML=some.join('')