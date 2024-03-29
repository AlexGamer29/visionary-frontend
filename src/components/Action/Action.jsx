import React from 'react'
import axios from 'axios'
import fileDownload from 'js-file-download'
import { getImageName } from '../../utils'
import ArrowDownIcon from '@heroicons/react/24/outline/ArrowDownIcon'

function Action(props) {
  const { Icon, Download } = props

  const handleDownload = async (url, filename) => {
    try {
      const response = await axios.get(url, { responseType: 'blob' })
      fileDownload(response.data, filename)
    } catch (error) {
      console.error('Error downloading file:', error)
    }
  }

  const handleClick = (url, filename) => {
    handleDownload(url, filename).catch((error) => {
      console.error('Error handling download:', error)
    })
  }

  // Compare the component type instead of accessing a non-existent property.
  if (Icon === ArrowDownIcon && Download !== undefined && Download !== '') {
    const imageName = getImageName(Download)

    return (
      <div
        className="p-3 bg-slate-50 rounded-md cursor-pointer shadow-md group"
        onClick={() => {
          if (Download !== undefined && Download !== '') {
            handleClick(Download, imageName)
          }
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
