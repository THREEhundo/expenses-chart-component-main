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
		(e) => (e.target.style.backgroundColor = '#76B7BC')
	)
	bar.addEventListener(
		'mouseleave',
		(e) => (e.target.style.backgroundColor = 'hsl(10, 79%, 65%)')
	)
})

//console.log(bars)
//
//bars.forEach((bar) => bar.addEventListener('hover', () => console.log(`first`)))
//
//const graph = document.querySelector('.bars')
//graph.addEventListener('mouseenter', (e) => console.log(e.target))
