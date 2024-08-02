import React, { useState, useEffect } from 'react'
import LoadingBar from 'react-top-loading-bar'

const ProgressBar = () => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Set an interval to update progress every second (1000ms)
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100 // Ensures progress doesn't exceed 100%
        }
        return prev + 20 // Increment progress by 30%
      })
    }, 500)

    // Clear the interval when component unmounts
    return () => clearInterval(interval)
  }, [])

  return (
    <div>
      <LoadingBar
        color='blue'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
    </div>
  )
}

export default ProgressBar;
