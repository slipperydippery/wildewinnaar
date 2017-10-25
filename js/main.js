Vue.component('parallax', {
	template: `
		<div class="parallax-container" > 
			<img src="img/background_plus.png" alt="" :style="{ height: bgHeight + 'px', width: bgWidth + 'px', left: bgLeft + 'px', top: bgTop + 'px' }">
		</div>
	`,

	data() {
		return {
			percentX: 0,
			percentY: 0,
			bgOHeight: 1796,
			bgOWidth: 2964,
			bgRatio: 1,
			bgResizeRatio: 1,
			bgHeight: 10,
			bgWidth: 10,
			bgExtraY: 0,
			bgExtraX: 0,
		}
	},

	computed: {
		howFarFromTop() {
			return 30 * this.percentY;
		},
		bgLeft() {
			return -(this.bgExtraX * this.percentX);
		},
		bgTop() {
			return -(this.bgExtraY * this.percentY);

		}

	},

	methods: {
		someMethod(event) {
		},

		saySomething(event) {
			this.percentX = (event.pageX / window.innerWidth);
			this.percentY = (event.pageY / window.innerHeight);
			console.log(this.bgWidth);
		},
		mouseOver() {
			console.log ('else');
		},
		calculateBackground(){
			this.bgRatio = this.bgOWidth / this.bgOHeight;
			if (this.bgRatio > (window.innerWidth / window.innerHeight )) {
				//take window height times 1.1 as image height
				this.bgResizeRatio = (window.innerHeight * 1.1) / this.bgOHeight;
				this.bgHeight = this.bgOHeight * this.bgResizeRatio;
				this.bgWidth = this.bgOWidth * this.bgResizeRatio;
				console.log('wider');	
			} else {
				// take window width times 1.1 as image width
				this.bgResizeRatio = (window.innerWidth * 1.1) / this.bgOWidth;
				this.bgHeight = this.bgOHeight * this.bgResizeRatio;
				this.bgWidth = this.bgOWidth * this.bgResizeRatio;
				console.log('higher' + this.bgWidth);
			}
			this.bgExtraX = this.bgWidth - window.innerWidth;
			this.bgExtraY = this.bgHeight - window.innerHeight;
		},
	},

	created: function() {
		window.addEventListener('mousemove',this.saySomething);
		this.calculateBackground();
		window.addEventListener('resize', this.calculateBackground);
	},

	mounted () {
	}
});

new Vue({
	el: '#root',


})

