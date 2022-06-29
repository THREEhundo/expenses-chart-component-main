/***
 * section -> .balance-container
 * 		p -> My balance
 * 		h2 -> $921.48
 * 		div -> .svg-container
 * 		img -> svg logo
 *
 * section -> .spending-chart
 * 		section -> bar-graph-container
 * 		h2 -> Spending - Last 7 Days
 * 		div -> .daily-bar x 7 (data-day)
 * 		p -> .daily-bar-label x 7
 *
 * section -> .spending-total
 * 	section -> .half
 * 		p -> total this month
 * 		h1 -> .total-num
 * 	section -> .half
 * 		p -> percentage (bold)
 * 		p -> from last month
 */

const bars = document.querySelectorAll('.bar')
bars.forEach((bar) => {
	bar.addEventListener(
		'mouseenter',
		(e) => (e.target.style.backgroundColor = 'hsl(28, 10%, 53%)')
	)
	bar.addEventListener(
		'mouseleave',
		(e) => (e.target.style.backgroundColor = 'hsl(10, 79%, 65%)')
	)
})

const highlightDayBar = () => {
	const getDate = new Date().getDay()
	const daysArr = [
		'hsl(10, 79%, 65%)',
		'hsl(10, 79%, 65%)',
		'hsl(10, 79%, 65%)',
		'hsl(10, 79%, 65%)',
		'hsl(10, 79%, 65%)',
		'hsl(10, 79%, 65%)',
		'hsl(10, 79%, 65%)',
	]
	let newDay = daysArr.map((day, i) => (i == getDate ? (day = '#76B7BC') : day))
	console.log(newDay)

	return newDay
}

//const updateDailyAmount = () => {
//	bars.map((x, i) => )
//}
const fetchJSON = async (updateAmount) =>
	await fetch('data.json')
		.then((resp) => resp.json())
		.then((data) => {
			updateAmount(data, bars)
			let d = retrieveDailyData(data)
			return addData(myChart, d)
		})

//let barData = fetchJSON(updateDailyAmount)

function updateDailyAmount(data, bars) {
	;[...bars].map((x, i) => {
		data.map((k, index) => {
			if (i == index) x.innerHTML = k.amount
		})
	})
}

function retrieveDailyData(data) {
	return [...data].map((item) => item.amount)
}

const daysArr = [
	'hsl(10, 79%, 65%)',
	'hsl(10, 79%, 65%)',
	'hsl(10, 79%, 65%)',
	'hsl(10, 79%, 65%)',
	'hsl(10, 79%, 65%)',
	'hsl(10, 79%, 65%)',
	'hsl(10, 79%, 65%)',
]
const ctx = document.getElementById('myChart').getContext('2d')
const myChart = new Chart(ctx, {
	type: 'bar',
	scaleLineColor: 'rgba(0,0,0,0)',
	data: {
		labels: ['mon', 'tues', 'wed', 'thu', 'fri', 'sat', 'sun'],
		datasets: [
			{
				data: [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48],
				backgroundColor: highlightDayBar(),
				borderColor: highlightDayBar(),
				borderWidth: 2,
				borderRadius: 5,
				borderSkipped: false,
			},
		],
	},
	options: {
		plugins: {
			legend: {
				display: false,
			},
		},
		scales: {
			y: {
				beginAtZero: true,
				grid: {
					display: false,
				},
				ticks: {
					display: false,
				},
			},
			x: {
				grid: {
					display: false,
				},
			},
		},
	},
})
//function addData(chart, data) {
//	chart.data.datasets.forEach((dataset) => {
//		dataset.data.push(data)
//		console.log(dataset.data)
//	})
//	chart.update()
//}
//removeData(myChart)
//addData(myChart, barData)
//
//function removeData(chart) {
//	chart.data.labels.pop()
//	chart.data.datasets.forEach((dataset) => {
//		dataset.data.pop()
//	})
//	chart.update()
//}
//
//console.log(myChart.data.dataset)

// ! Make mobile responsive
// ? Make bars wider
// ? Make container wider
// ! Add border top to last container
// ?
