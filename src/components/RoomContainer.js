import React from 'react'
import RoomList from './RoomList'
import RoomFilter from './RoomFilter'
import {withRoomConsumer} from '../context'
import Loading from './Loading'


function RoomContainer({context}){
    const {loading, sortedRooms, rooms} = context
    if (loading){
        return <Loading />
    }
    return (
        <div>
            <RoomFilter rooms={rooms}/>
            <RoomList rooms={sortedRooms}/>            
        </div>
    )
}

export default withRoomConsumer(RoomContainer)





// import React from 'react'
// import RoomList from './RoomList'
// import RoomFilter from './RoomFilter'
// import {RoomConsumer} from '../context'
// import Loading from './Loading'

// export default function RoomContainer() {
//     return (
//         <RoomConsumer>
//             {value =>{
//                 const {loading, sortedRooms, rooms} = value
//                 if (loading){
//                     return <Loading />
//                 }
//                 return (
//                     <div>
//                         Hello from rooms container 
//                         <RoomFilter rooms={rooms}/>
//                         <RoomList rooms={sortedRooms}/>            
//                     </div>
//                 )
//             }}
//         </RoomConsumer>


        
//     )
// }
