Vue.component('parallax', {
	template: `
		<div class="parallax-container" > 
			<div class="parallax" :class="divclass" :style="{ height: divheight + 'px', width: divwidth + 'px', transform: 'translate3d(' + bgLeft + 'px, ' + bgTop + 'px, 0)' }">
				<slot></slot>
			</div>
		</div>
	`,

	data() {
		return {
			rootHeight: 1796,
			rootWidth: 2964,
			rootResizeRatio: 1,
			mousePercentX: 0,
			mousePercentY: 0,
			bgRatio: 1,
			bgHeight: 10,
			bgWidth: 10,
			bgExtraY: 0,
			bgExtraX: 0,

		}
	},
	props: [
		'zoomratio',
		'divclass',
		'divoheight',
		'divowidth',
		'divotop'
	],

	computed: {
		bgLeft() {
			return -(this.bgExtraX * this.mousePercentX);
		},
		bgTop() {
			return -(this.bgExtraY * this.mousePercentY);
		},
		divheight() {
			return this.divoheight * this.rootResizeRatio;
		},
		divwidth (){
			return this.divowidth * this.rootResizeRatio;
		}

	},

	methods: {
		mousePosition(event) {
			this.mousePercentX = (event.pageX / window.innerWidth);
			this.mousePercentY = (event.pageY / window.innerHeight);
		},
		calculateBackground(){
			this.bgRatio = this.rootWidth / this.rootHeight;
			if (this.bgRatio > (window.innerWidth / window.innerHeight )) {
				//take window height times this.zoomratio as image height
				this.rootResizeRatio = (window.innerHeight * this.zoomratio) / this.rootHeight;
				this.bgHeight = this.rootHeight * this.rootResizeRatio;
				this.bgWidth = this.rootWidth * this.rootResizeRatio;
			} else {
				// take window width times this.zoomratio as image width
				this.rootResizeRatio = (window.innerWidth * this.zoomratio) / this.rootWidth;
				this.bgHeight = this.rootHeight * this.rootResizeRatio;
				this.bgWidth = this.rootWidth * this.rootResizeRatio;
			}
			this.bgExtraX = this.bgWidth - window.innerWidth;
			this.bgExtraY = this.bgHeight - window.innerHeight;
		},
	},

	created: function() {
		this.calculateBackground();
		window.addEventListener('mousemove',this.mousePosition);
		window.addEventListener('resize', this.calculateBackground);
	},
	mounted () {
	}
});

new Vue({
	el: '#root',

})

