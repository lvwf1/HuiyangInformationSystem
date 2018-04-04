Raphael.fn.pieChart = function (cx, cy, r, values, labels, stroke) {
    var paper = this,
        rad = Math.PI / 180,
        chart = this.set();
    function sector(cx, cy, r, startAngle, endAngle, params) {
        var x1 = cx + r * Math.cos(-startAngle * rad),
            x2 = cx + r * Math.cos(-endAngle * rad),
            y1 = cy + r * Math.sin(-startAngle * rad),
            y2 = cy + r * Math.sin(-endAngle * rad);
        return paper.path(["M", cx, cy, "L", x1, y1, "A", r, r, 0, +(endAngle - startAngle > 180), 0, x2, y2, "z"]).attr(params);
    }
    var angle = 0,
        total = 0,
        start = 0,
//      a =0,
//      b = 0,
//      c = .57
//      d = .66
        a =.82;
		b =.58;
		c =.96;
        process = function (j) {
            var value = values[j],
                angleplus = 360 * value / total,
                popangle = angle + (angleplus / 2),
//              color = Raphael.hsb(start, .75, 1), // 自带
//				color = Raphael.hsb(0, 0, .57),    //灰色
				color = Raphael.hsb(a, b, c),    //灰色
//				color = Raphael.hsb(.14, .47, .90),  //橘色
                ms = 500,
                delta = 30,
//              bcolor = Raphael.hsb(start, 1, 1), // 自带
//              bcolor = Raphael.hsb(0, 0, .66),  //灰色
                bcolor = Raphael.hsb(a, b, c),  //灰色
//				bcolor = Raphael.hsb(.14, .47, .90),   //橘色
                p = sector(cx, cy, r, angle, angle + angleplus, {fill: "90-" + bcolor + "-" + color, stroke: stroke, "stroke-width": 3}),
//				p = sector(cx, cy, r, angle, angle + angleplus, {fill:  color, stroke: stroke, "stroke-width": 3}),
                txt = paper.text(cx + (r + delta + 5) * Math.cos(-popangle * rad), cy + (r + delta + 45) * Math.sin(-popangle * rad), labels[j]).attr({fill: bcolor, stroke: "none", opacity: 0, "font-size": 20});
            p.mouseover(function () {
                p.stop().animate({transform: "s1.1 1.1 " + cx + " " + cy}, ms, "elastic");
                txt.stop().animate({opacity: 1}, ms, "elastic");
            }).mouseout(function () {
                p.stop().animate({transform: ""}, ms, "elastic");
                txt.stop().animate({opacity: 0}, ms);
            });
            angle += angleplus;
            chart.push(p);
            chart.push(txt);
//          start += .1;
			a +=-.82;
			b +=-.58;
			c +=-.39;
        };
    for (var i = 0, ii = values.length; i < ii; i++) {
        total += values[i];
    }
    for (i = 0; i < ii; i++) {
        process(i);
    }
    return chart;
};

$(function () {
    var values = [],
        labels = [];
    $("tr").each(function () {
        values.push(parseInt($("td", this).text(), 10));
        labels.push($("th", this).text());
    });
    $("table").hide();
    Raphael("holder", 350, 350).pieChart(200, 200, 130, values, labels, "#fff");
});