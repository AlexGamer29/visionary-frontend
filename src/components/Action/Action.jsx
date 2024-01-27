import { React } from 'react'
import axios from 'axios'
import fileDownload from 'js-file-download'
import { getImageName } from '../../utils/'

function Action(props) {
  const { Icon, Download } = props

  const handleDownload = (url, filename) => {
    axios
      .get(url, {
        responseType: 'blob',
      })
      .then((res) => {
        fileDownload(res.data, filename)
      })
  }

  if (Icon.render.name === 'ArrowDownIcon') {
    return (
      <div
        className="p-3 bg-slate-50 rounded-md cursor-pointer shadow-md group"
        onClick={() => {
          handleDownload(Download, getImageName(Download).concat('.jpeg'))
        }}
      >
        <Icon className="w-4 h-4 text-neutral-500 group-hover:text-neutral-800" />
      </div>
    )
  }
  return (
    <div className="p-3 bg-slate-50 rounded-md cursor-pointer shadow-md group">
      <Icon className="w-4 h-4 text-neutral-500 group-hover:text-neutral-800" />
    </div>
  )
}

export default Action
