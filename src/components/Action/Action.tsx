import React from 'react'
import axios from 'axios'
import fileDownload from 'js-file-download'
import { getImageName } from '../../utils'
import ArrowDownIcon from '@heroicons/react/24/outline/ArrowDownIcon'

interface IProps {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  Download?: string
}

function Action (props: IProps): JSX.Element {
  const { Icon, Download } = props

  const handleDownload = async (
    url: string,
    filename: string
  ): Promise<void> => {
    try {
      const response = await axios.get<Blob>(url, { responseType: 'blob' })
      fileDownload(response.data, filename)
    } catch (error) {
      console.error('Error downloading file:', error)
    }
  }

  const handleClick = (url: string, filename: string): void => {
    handleDownload(url, filename).catch((error) => {
      console.error('Error handling download:', error)
    })
  }

  // Compare the component type instead of accessing a non-existent property.
  if (Icon === ArrowDownIcon && Download !== '') {
    const imageName = getImageName(Download)

    return (
      <div
        className="p-3 bg-slate-50 rounded-md cursor-pointer shadow-md group"
        onClick={() => {
          handleClick(Download, imageName)
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
