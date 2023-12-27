import {XMarkIcon} from "@heroicons/react/24/solid"
const OrderCard = props => {
    const {id, title, imageUrl, price, handleDelete} = props

    let renderXMarkIcon
    if (handleDelete) {
        renderXMarkIcon =  <XMarkIcon 
        onClick={() => handleDelete(id)} 
        className="w-6 h-6 cursor-pointer hover:text-yellow-600" />
  }

  return (
    <div className="flex justify-between items-center py-2">
        <div className="flex items-center gap-2">
            <figure className="w-20 h-20">
                <img className="w-full h-full rounded-lg object-cover" src={imageUrl} alt={title} />
            </figure>
            <p className="text-sm font-light">{title}</p>
        </div>
        <div  className="flex items-center gap-2">
            <p className="text-lg font-bold">${price}</p>
            {renderXMarkIcon}
        </div>
    </div>
  )
}

export default OrderCard