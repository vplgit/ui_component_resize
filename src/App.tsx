import { useState } from 'react'
import { Resizable } from 're-resizable'

const YourComponent = () => {
  const [sizes, setSizes] = useState([
    { width: '100%', height: 400 },
    { width: '100%', height: 400 },
    { width: '100%', height: 200 }, // Updated width to '100%'
  ])

  const handleResize = (index, direction, ref, d) => {
    const newSizes = [...sizes]
    newSizes[index] = { width: ref.style.width, height: ref.style.height }
    setSizes(newSizes)
  }

  return (
    <div className="max-w-screen overflow-x-auto h-screen m-2">
      <div className="flex flex-col w-full">
        <div className="flex flex-col w-full gap-4 lg:flex-row xl:flex-row 2xl:flex-row">
          <div className="w-full">
            <Resizable
              key={0}
              size={sizes[0]}
              onResize={(e, direction, ref, d) =>
                handleResize(0, direction, ref, d)
              }
              className="border w-1/2 flex border-gray-300 m-5"
              enable={{
                top: true,
                right: true,
                bottom: true,
                left: true,
              }}
            >
              <div className="flex flex-col justify-center items-center w-full h-full p-4">
                <p className="font-bold">What is Blockchain ?</p>
                <p className="text-justify">
                  Blockchain is a decentralized, distributed ledger technology
                  that records transactions across multiple computers in a way
                  that makes them secure, transparent, and tamper-proof. In
                  essence, it's a chain of blocks, where each block contains a
                  list of transactions. These blocks are linked together in a
                  chronological order, forming a chain.
                </p>
              </div>
            </Resizable>
          </div>
          <div className="w-full  ">
            <Resizable
              key={1}
              size={sizes[1]}
              onResize={(e, direction, ref, d) =>
                handleResize(1, direction, ref, d)
              }
              className="border border-gray-300 m-5"
              enable={{
                top: true,
                right: true,
                bottom: true,
                left: true,
              }}
            >
              <div className="flex flex-col justify-center items-center w-full h-full p-4">
                <p className="font-bold">What is IOT</p>
                <p className="text-justify">
                  IoT stands for the Internet of Things. It refers to the
                  network of physical objects ("things") that are embedded with
                  sensors, software, and other technologies to connect and
                  exchange data with other devices and systems over the
                  internet. These objects can range from everyday items like
                  household appliances and wearable devices to industrial
                  machines and infrastructure.
                </p>
              </div>
            </Resizable>
          </div>
        </div>
        <div className="flex justify-center ">
          <Resizable
            key={2}
            size={sizes[2]}
            onResize={(e, direction, ref, d) =>
              handleResize(2, direction, ref, d)
            }
            className="border border-gray-300 m-5 overflow-hidden flex flex-wrap"
            enable={{
              top: true,
              right: true,
              bottom: true,
              left: true,
            }}
          >
            <div className="flex flex-col justify-center items-center w-full h-full p-4">
              <p className="font-bold">What is AI</p>
              <p className="text-justify">
                AI stands for "Artificial Intelligence." It refers to the
                simulation of human intelligence processes by machines,
                especially computer systems. These processes include learning
                (the acquisition of information and rules for using the
                information), reasoning (using rules to reach approximate or
                definite conclusions), and self-correction. AI encompasses a
                wide range of technologies, including machine learning, natural
                language processing, computer vision, robotics, and more. AI
                systems can perform tasks that typically require human
                intelligence, such as recognizing speech, understanding
                language, making decisions, and even driving cars.
              </p>
            </div>
          </Resizable>
        </div>
      </div>
    </div>
  )
}

export default YourComponent
