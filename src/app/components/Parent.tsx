
import Child from './Child'

const Parent = () => {
    let fullName = "Muhammad Sharjeel"
    let address = "Karachi ,Pakistan"
    let rollNumber = 472367

    let fullName2 = "Zahid Ali"
    let address2 = "Karachi ,Pakistan"
    let rollNumber2 = 418391

    return (
        <div>
        <Child
            name={fullName}
            address={address}
            rollNO={rollNumber}
        />

        <Child
            name={fullName2}
            address={address2}
            rollNO={rollNumber2}
        />
        </div>
    )
}

export default Parent