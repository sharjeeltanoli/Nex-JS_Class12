const Child = (props: any) => {

    return (
    <div className="border p-5 w-96 text-center ">
        <h2 className="text-3xl p-2 font-bold ">
            {props.name}
        </h2>
        <h6 className="text-3xl p-2">
            {props.address}
        </h6>
        <p className="text-3xl p-2">{props.rollNO}</p>
    </div>
  )
}

export default Child