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
	switch (getDate) {
		case 0:
			bars[0].style.backgroundColor = '#76B7BC'
			break
		case 1:
			bars[1].style.backgroundColor = '#76B7BC'
			break
		case 2:
			bars[2].style.backgroundColor = '#76B7BC'
			break
		case 3:
			bars[3].style.backgroundColor = '#76B7BC'
			break
		case 4:
			bars[4].style.backgroundColor = '#76B7BC'
			break
		case 5:
			bars[5].style.backgroundColor = '#76B7BC'
			break
		case 6:
			bars[6].style.backgroundColor = '#76B7BC'
			break

		default:
			break
	}
}
highlightDayBar()

//const updateDailyAmount = () => {
//	bars.map((x, i) => )
//}
const fetchJSON = async (updateAmount) => {
	await fetch('data.json')
		.then((resp) => resp.json())
		.then((data) => {
			console.log([...bars])
			updateAmount(data, bars)
		})
}

fetchJSON(updateDailyAmount)

function updateDailyAmount(data, bars) {
	;[...bars].map((x, i) => {
		console.log(x, i)
		data.map((k, index) => {
			console.log(x, k)
			if (i == index) x.innerHTML = k.amount
		})
	})
}
