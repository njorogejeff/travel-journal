import React from 'react'
import travelJournalLogo from '../assets/travel-journal-logo.svg'

export default function Navbar() {
    return (
        <nav className='bg-sunsetOrange text-white flex items-center justify-center gap-2 py-5'>
            <img src={travelJournalLogo} alt="My Travel Journal Logo" />
            <h1 className='tracking-tighter'>my travel journal.</h1>
        </nav>
    )
}