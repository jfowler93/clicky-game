(this["webpackJsonpclicky-game"]=this["webpackJsonpclicky-game"]||[]).push([[0],[,function(e){e.exports=JSON.parse('[{"id":1,"name":"Charlie","image":"https://images.8tracks.com/cover/i/009/128/165/Screen_Shot_2015-05-29_at_9.04.57_PM-151.png?rect=0,2,690,690&q=98&fm=jpg&fit=max&w=640&h=640","clicked":false},{"id":2,"name":"Couch Frank","image":"https://img.maximummedia.ie/joe_ie/eyJkYXRhIjoie1widXJsXCI6XCJodHRwOlxcXC9cXFwvbWVkaWEtam9lLm1heGltdW1tZWRpYS5pZS5zMy5hbWF6b25hd3MuY29tXFxcL3dwLWNvbnRlbnRcXFwvdXBsb2Fkc1xcXC8yMDE3XFxcLzA0XFxcLzI0MTExNTA0XFxcL0ZyYW5rLVJleW5vbGRzLVBJQy5wbmdcIixcIndpZHRoXCI6NzY3LFwiaGVpZ2h0XCI6NDMxLFwiZGVmYXVsdFwiOlwiaHR0cHM6XFxcL1xcXC93d3cuam9lLmllXFxcL2Fzc2V0c1xcXC9pbWFnZXNcXFwvam9lXFxcL25vLWltYWdlLnBuZz9pZD0yNjRhMmRiZTM3MGYyYzY3NWZjZFwiLFwib3B0aW9uc1wiOltdfSIsImhhc2giOiI1MmI1ODJkOWQ4MzY4NjFlMGQ2NjUyNDZhZThmMTNiODdiNWMxM2YwIn0=/frank-reynolds-pic.png","clicked":false},{"id":3,"name":"Cricket","image":"https://pbs.twimg.com/profile_images/1078340178018594816/x5raoHX4.jpg","clicked":false},{"id":4,"name":"Dayman","image":"https://pbs.twimg.com/media/CVWXXXAWsAECWUS.jpg","clicked":false},{"id":5,"name":"Dee","image":"https://static1.srcdn.com/wordpress/wp-content/uploads/2019/06/Dee-in-Its-Always-Sunny-in-Philadelphia-1.jpg","clicked":false},{"id":6,"name":"Dennis","image":"https://i.kym-cdn.com/entries/icons/original/000/031/036/dennis.jpg","clicked":false},{"id":7,"name":"Frank","image":"https://external-preview.redd.it/lGYncBSesEVYr7j20zgj_cUWqU-RfPGMqZJRLMO5poY.jpg?width=640&crop=smart&auto=webp&s=88e6e11a7837ba79b4e7e187a8c9f06f19a699e8","clicked":false},{"id":8,"name":"Greenman","image":"https://vignette.wikia.nocookie.net/itsalwayssunny/images/8/81/Greeman.jpg/revision/latest?cb=20100221015952","clicked":false},{"id":9,"name":"Liam McPoyle","image":"https://www.thewrap.com/wp-content/uploads/2018/03/Jimmi-Simpson-Its-Always-Sunny.png","clicked":false},{"id":10,"name":"Mac","image":"https://img.huffingtonpost.com/asset/5bb4dd8d24000031005633a6.jpeg?ops=scalefit_630_noupscale","clicked":false},{"id":11,"name":"Nightman","image":"https://pbs.twimg.com/profile_images/1144624509934288896/6vGoauW0_400x400.png","clicked":false},{"id":12,"name":"Ongo","image":"https://i.pinimg.com/originals/60/18/db/6018db263ec941425dee5aa4fb8f4389.jpg","clicked":false}]')},,,,,,,,function(e,a,t){e.exports=t(20)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),i=t(3),l=t.n(i),r=(t(14),t(4)),s=t(5),m=t(7),o=t(6),d=t(8),h=(t(15),function(e){return c.a.createElement("div",{className:"col-md-2 col-sm-3 col-6"},c.a.createElement("div",{classname:"card",value:e.id,onClick:function(){return e.handleClick(e.id)}},c.a.createElement("div",{className:"img-container"},c.a.createElement("img",{alt:e.name,src:e.image}))))}),p=(t(16),function(e){return c.a.createElement("nav",null,c.a.createElement("ul",null,c.a.createElement("li",{id:"title"},c.a.createElement("span",{className:"header"},e.title)),c.a.createElement("li",{id:"message"},e.message),c.a.createElement("li",{id:"gameScore"},"Current Score: ",e.score),c.a.createElement("li",{id:"highScore"},"Top Score: ",e.highScore)))}),u=(t(17),function(e){return c.a.createElement("div",{className:"wrapper"},e.children)}),g=(t(18),function(e){return c.a.createElement("h1",{className:"title"},e.children)}),f=t(1);t(19);var k=function(e){function a(){var e,t;Object(r.a)(this,a);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(t=Object(m.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(c)))).state={people:f,currentScore:0,highScore:0,message:"",clicked:[]},t.handleClick=function(e){-1===t.state.clicked.indexOf(e)?(t.handleIncrement(),t.setState({clicked:t.state.clicked.concat(e)})):t.handleReset()},t.handleIncrement=function(){var e=t.state.currentScore+1;t.setState({currentScore:e,message:"You're the Master of Karate and Friendship for everyone"}),t.handleShuffle()},t.handleReset=function(){t.setState({currentScore:0,highScore:t.state.highScore,message:"I AM UNTETHERED AND MY RAGE KNOWS NO BOUNDS",clicked:[]}),t.handleShuffle()},t.handleShuffle=function(){var e=function(e){for(var a=e.length-1;a>0;a--){var t=Math.floor(Math.random()*(a+1)),n=[e[t],e[a]];e[a]=n[0],e[t]=n[1]}return e}(f);t.setState({people:e})},t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement(u,null,c.a.createElement(p,{title:"Clickity Cricket",score:this.state.currentScore,highScore:this.state.highScore,message:this.state.message}),c.a.createElement(g,null,"Test Your Memory! Click an image to earn points. If you click an image more than once, you lose!"),this.state.people.map((function(a){return c.a.createElement(h,{key:a.id,handleClick:e.handleClick,handleIncrement:e.handleIncrement,handleReset:e.handleReset,handleShuffle:e.handleShuffle,id:a.id,image:a.image})})))}}]),a}(n.Component);l.a.render(c.a.createElement(k,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.9347b189.chunk.js.map