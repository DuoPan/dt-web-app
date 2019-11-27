import echarts from 'echarts'

const createChart = (getOption) => {
  class Chart extends React.Component {
    constructor (props) {
      super(props)
      this.chart = null
      this.chartResize = null
    }
    componentDidMount () {
      const option = getOption(this.props)
      const {theme} = this.props
      const chart = echarts.getInstanceByDom(this.chartElem)
      if (!chart) {
        this.chart = echarts.init(this.chartElem, theme || 'DY')
        this.chart.setOption(option)
        this.props.onItemClick && this.chart.on('click', this.props.onItemClick.bind(this))
        this.props.onLegendChange && this.chart.on('legendselectchanged', this.props.onLegendChange.bind(this))
        _.forEach(this.props.eventHandlers, h => {
          h.cb && this.chart.on(h.name, e => h.cb(e, this.chart))
        })
      }
      this.chartResize = () => this.chart.resize()
      this.containerAutoHeight(this.props)
    }
    componentWillReceiveProps (nextProps) {
      if (this.chart &&
          (nextProps.dataSource !== this.props.dataSource ||
            !_.isEqual(nextProps.dataSource, this.props.dataSource))) {
        const option = getOption(nextProps)
        this.chart.setOption(option, true)
        this.containerAutoHeight(nextProps)
      }
    }

    componentWillUnmount () {
      this.chart && this.chart.dispose()
    }
    // 容器自适应高度
    containerAutoHeight (props) {
      if (props.vertical && props.autoHeight) {
        this.chart.getDom().style.height = props.itemGap * ((props.dataSource.length && props.dataSource[0].data && props.dataSource[0].data.length) || 0) + 'px'
        this.chartResize()
      }
    }

    render () {
      const {readOnly = false, className, wrapperStyle, chartStyle, imageOptions = {pixelRatio: 1}} = this.props

      const imgOptions = {
        type: 'png',
        ...imageOptions
      }

      return (
        <div className={className} style={{ width: '100%', height: '100%', ...wrapperStyle }}>
          <div
            ref={elem => { this.chartElem = elem }}
            style={{width: '100%', height: '100%', display: readOnly ? 'none' : 'block', ...chartStyle}} />
          {
            readOnly
            ? <img src={this.chart ? this.chart.getDataURL(imgOptions) : ''} style={{ width: '100%' }} />
            : null
          }
        </div>
      )
    }
  }
  return Chart
}

export default createChart
