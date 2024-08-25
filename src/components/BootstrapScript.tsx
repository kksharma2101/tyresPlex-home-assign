'use client'

import React, { useEffect } from 'react'

const BootstrapScript = () => {
    useEffect(() => {
        // @ts-ignore
        import("bootstrap/dist/js/bootstrap.bundle")
    }, [])
    return (
        <></>
    )
}
export default BootstrapScript