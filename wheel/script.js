var padding = {top:20, right:40, bottom:0, left:0},
            w = 500 - padding.left - padding.right,
            h = 500 - padding.top  - padding.bottom,
            r = Math.min(w, h)/2,
            rotation = 0,
            oldrotation = 0,
            picked = 100000,
            oldpick = [],
            color = d3.scale.category20();//category20c()
            //randomNumbers = getRandomNumbers();
            var data = [
                    {"label":"LEADERSHIP",  "value":1,  "question":"Take action and make decisions using the information available. Keep the big picture in mind. Take steps to improve your team’s overall position and fill in knowledge gaps."}, // padding
                    {"label":"COMPOSURE",  "value":2,  "question":"Work with others in a professional manner and calmly deal with a range of attitudes and behaviors exhibited by counterparts, partners, and adversaries."}, //font-family
                    {"label":"ANALYSIS",  "value":3,  "question":"Study countries and research their political, economic, and cultural norms and developments. Think critically about what is going on."}, //color
                    {"label":"MANAGEMENT",  "value":4,  "question":"Use the skills and strengths of your team members. Know what tools and resources you and your team have to help you meet your country’s goals and agenda."}, //font-weight
                    {"label":"AWARENESS",  "value":5,  "question":"Respect different cultures and customs. Recognize when situations and circumstances are changing and adapt to meet that change. Be aware of things you do not know or understand."}, //font-size
                    {"label":"INNOVATION",  "value":6,  "question":"Observe current conditions and practices and offer creative improvements, solutions and methods to better carry out the mission."}, //background-color
                    {"label":"COLLABORATION",  "value":7,  "question":"Incorporate the ideas of others and find common ground."}, //nesting
                    {"label":"COMMUNICATION",  "value":8,  "question":"Articulate your position and listen openly to the positions of the other country’s positions. Listen for where interests overlap. Confirm positions and language used to avoid misunderstandings."}, //bottom
                    {"label":"ADVOCACY",  "value":9,  "question":"Uphold and advance U.S. interests in all aspects of diplomatic work."}, //sans-serif
        ];
        var svg = d3.select('#chart')
            .append("svg")
            .data([data])
            .attr("width",  w + padding.left + padding.right)
            .attr("height", h + padding.top + padding.bottom);
        var container = svg.append("g")
            .attr("class", "chartholder")
            .attr("transform", "translate(" + (w/2 + padding.left) + "," + (h/2 + padding.top) + ")");
        var vis = container
            .append("g");
            
        var pie = d3.layout.pie().sort(null).value(function(d){return 1;});
        // declare an arc generator function
        var arc = d3.svg.arc().outerRadius(r);
        // select paths, use arc generator to draw
        var arcs = vis.selectAll("g.slice")
            .data(pie)
            .enter()
            .append("g")
            .attr("class", "slice");
            
        arcs.append("path")
            .attr("fill", function(d, i){ return getRedWhiteBlue(i % 3); })
            .attr("d", function (d) { return arc(d); });
        // add the text
        arcs.append("text").attr("transform", function(d){
                d.innerRadius = 0;
                d.outerRadius = r;
                d.angle = (d.startAngle + d.endAngle)/2;
                return "rotate(" + (d.angle * 180 / Math.PI - 90) + ")translate(" + (d.outerRadius -10) +")";
            })
            .attr("text-anchor", "end")
            .style('fill', 'white')
            .style("font-size", "18px")
            .text( function(d, i) {
                return data[i].label;
            });
        container.on("click", spin);
        function spin(d){
            
            container.on("click", null);
            //all slices have been seen, all done
            console.log("OldPick: " + oldpick.length, "Data length: " + data.length);
            if(oldpick.length == data.length){
                //reset
                oldpick.forEach(function (picked, i) {
                     d3.select(".slice:nth-child(" + (picked) + ") path")
                        .attr("fill", getRedWhiteBlue((picked + 2)% 3));
                        d3.select(".slice:nth-child(" + (picked + 1) + ") path")
                        .attr("fill", getRedWhiteBlue((picked +3) % 3));
                });
                oldpick = [];
                console.log("done");
                container.on("click", spin);
               
                return;
            }
            var  ps       = 360/data.length,
                 pieslice = Math.round(1440/data.length),
                 rng      = Math.floor((Math.random() * 1440) + 360);
                
            rotation = (Math.round(rng / ps) * ps);
            
            picked = Math.round(data.length - (rotation % 360)/ps);
            picked = picked >= data.length ? (picked % data.length) : picked;
            if(oldpick.indexOf(picked) !== -1){
                d3.select(this).call(spin);
                return;
            } else {
                oldpick.push(picked);
            }
            rotation += 90 - Math.round(ps/2);
            vis.transition()
                .duration(3000)
                .attrTween("transform", rotTween)
                .each("end", function(){
                    //mark question as seen
                    d3.select(".slice:nth-child(" + (picked + 1) + ") path")
                        .attr("fill", "#111");
                    //populate question
                    d3.select("#question h1")
                        .text(data[picked].question);
                    oldrotation = rotation;
              
                    /* Get the result value from object "data" */
                    console.log(data[picked].value)
              
                    /* Comment the below line for restrict spin to sngle time */
                    container.on("click", spin);
                });
        }
        // arrow
        svg.append("g")
            .attr("transform", "translate(" + (w + padding.left + padding.right) + "," + ((h/2)+padding.top) + ")")
            .append("path")
            .attr("d", "M-" + (r*.15) + ",0L0," + (r*.05) + "L0,-" + (r*.05) + "Z")
            .style({"fill":"#ceab82"});
        //draw spin circle
        container.append("circle")
            .attr("cx", 0)
            .attr("cy", 0)
            .attr("r", 60)
            .style({"fill":"white","cursor":"pointer"});
        //spin text
        container.append("text")
            .attr("x", 0)
            .attr("y", 15)
            .attr("text-anchor", "middle")
            .text("SPIN")
            .style({"font-weight":"bold", "font-size":"30px"});
        
        
        function rotTween(to) {
          var i = d3.interpolate(oldrotation % 360, rotation);
          return function(t) {
            return "rotate(" + i(t) + ")";
          };
        }
        
        
        function getRandomNumbers(){
            var array = new Uint16Array(1000);
            var scale = d3.scale.linear().range([360, 1440]).domain([0, 100000]);
            if(window.hasOwnProperty("crypto") && typeof window.crypto.getRandomValues === "function"){
                window.crypto.getRandomValues(array);
                console.log("works");
            } else {
                for(var i=0; i < 1000; i++){
                    array[i] = Math.floor(Math.random() * 100000) + 1;
                }
            }
            return array;
        }

function getRedWhiteBlue(index){
    return ["#6c0d00", "#bac2c9", "#002744"][index]
}



