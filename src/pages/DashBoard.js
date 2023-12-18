import React, {useEffect} from 'react'
import * as d3 from "d3";

export default function DashBoard() {
  

 

  useEffect(() => {

    var data = [2, 4, 8, 10];

    var svg = d3.select("#chart1");
    var   width = 500;
    var    height = 500;
     var   radius = Math.min(width, height) / 2;
     var   g = svg.append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    var color = d3.scaleOrdinal(['#4daf4a','#377eb8','#ff7f00','#984ea3','#e41a1c']);

    // Generate the pie
    var pie = d3.pie();

    // Generate the arcs
    var arc = d3.arc()
                .innerRadius(0)
                .outerRadius(radius);

    //Generate groups
    var arcs = g.selectAll("arc")
                .data(pie(data))
                .enter()
                .append("g")
                .attr("class", "arc")

    //Draw arc paths
    arcs.append("path")
        .attr("fill", function(d, i) {
            return color(i);
        })
        .attr("d", arc);

  },[]);
  
  return (
    <>
       <script src="https://d3js.org/d3.v4.min.js"></script>
      <div>DashBoard </div>
     <div className='flex bg-red-100'> 
      <svg id='chart1' width='5000' height='500'> chart 1
       
      </svg>

      <svg id='chart2' width='500' height='500'> chart 2</svg>
      <svg id='chart3' width='500' height='500'> chart 3</svg>
      <svg id='chart4' width='500' height='500'> chart 4</svg>
     </div>
     

    </>

  )
}
