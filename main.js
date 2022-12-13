new Morris.Line({
    // ID of the element in which to draw the chart.
    element: 'myfirstchart',
    lineColors: ['orange'],
    // Chart data records -- each entry in this array corresponds to a point on
    // the chart.
    data: [{
            year: '2008',
            value: 20
        },
        {
            year: '2009',
            value: 30
        },
        {
            year: '2010',
            value: 15
        },
        {
            year: '2011',
            value: 25
        },
        {
            year: '2012',
            value: 45
        }, {
            year: '2013',
            value: 5
        },
        {
            year: '2014',
            value: 20
        }


    ],
    // The name of the data record attribute that contains x-values.
    xkey: 'year',
    // A list of names of data record attributes that contain y-values.
    ykeys: ['value'],
    // Labels for the ykeys -- will be displayed when you hover over the
    // chart.
    labels: ['Value']
});


/*
 * Play with this code and it'll update in the panel opposite.
 *
 * Why not try some of the options above?
 */
Morris.Donut({
    element: 'donut-example',
    data: [{
            label: "Download Sales",
            value: 20
        },
        {
            label: "In-Store Sales",
            value: 70
        },
        {
            label: "Mail-Order Sales",
            value: 20
        }
    ],
    colors: ['orange', 'blue', 'green'],
    labelColor: 'white'
});