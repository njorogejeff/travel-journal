import React from 'react'
import pinLocationLogo from '../assets/pin-location.svg'

export default function Card(props) {
    console.log(props);
    return (
        <>
            <article className='flex items-center justify-start gap-5 mb-10'>
                <img src={props.item.imageUrl} alt="" className='w-32 h-44 rounded-md object-cover' />
                <div>
                    <div className='flex items-center justify-start mb-1'>
                        <img src={pinLocationLogo} alt="" className='w-2 h-3 mr-1' />
                        <span className='text-xs uppercase mr-3'>{props.item.location}</span>
                        <a href={props.item.googleMapsUrl} target="_blank" rel="noopener noreferrer" className='text-spanishGray underline text-xs'>View on Google Maps</a>
                    </div>
                    <h2 className='text-2xl font-bold mb-4'>{props.item.title}</h2>
                    <p className='text-xs font-bold mb-2'><span>{props.item.startDate}</span> - <span>{props.item.endDate}</span></p>
                    <p className='text-xs leading-[150%]'>{props.item.description}</p>
                </div>
            </article>
        </>
    )
}