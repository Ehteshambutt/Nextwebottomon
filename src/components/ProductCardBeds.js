'use client'
import axios from 'axios';
import React, { useEffect, useRef, useState  } from 'react'

const ProductCardBeds = ({ name, price, image, hoverImage, discount, size, category, selectedGrid, index, pageType ,CallingFrom}) => {
    const imageRef = useRef();
    const icon1Ref = useRef();
    const icon2Ref = useRef();
    const isMattresses = pageType === 'Mattress'
    useEffect(() => {
        if (!imageRef || !icon1Ref || !icon2Ref) return
        if (!isMattresses) {
            imageRef.current?.addEventListener('mouseover', addHoverImage)
            imageRef.current?.addEventListener('mouseleave', removeHoverImage)
            return () => {
                imageRef.current?.removeEventListener('mouseover', addHoverImage)
                imageRef.current?.removeEventListener('mouseleave', removeHoverImage)
            }
        }
    }, [])
    const addHoverImage = () => {
        icon1Ref.current.style.display = 'inline-block';
        icon2Ref.current.style.display = 'inline-block';
        imageRef.current.src = '/SampleProduct2.jpg'
    }
    const removeHoverImage = () => {
        icon1Ref.current.style.display = 'none';
        icon2Ref.current.style.display = 'none';
        imageRef.current.src = '/SampleProduct.jpg'
    }
    const [mattresses, setMattresses] = useState([]);
    console.log(CallingFrom,'CallingFrom___')
      useEffect(() => {
          const fetchMattresses = async () => {
              try {
                  const response = await axios.get('http://localhost:5000/api/v1/Beds');
                  console.log('API Response:', response.data);
                  if(CallingFrom==='memoryFoam'){
                        const orthopaedicMattresses = response.data.filter(mattress => mattress.Type === 'Memory Foam');
                        setMattresses(orthopaedicMattresses)}
                        else  if(CallingFrom==='PocketSprung'){
                                const orthopaedicMattresses = response.data.filter(mattress => mattress.Type === 'Pocket Sprung');
                                setMattresses(orthopaedicMattresses);
                              }else  if(CallingFrom==='Orthopaedic'){
                                const orthopaedicMattresses = response.data.filter(mattress => mattress.Type === 'Orthopaedic');
                                setMattresses(orthopaedicMattresses);
                              }else  if(CallingFrom==='Latex'){
                                const orthopaedicMattresses = response.data.filter(mattress => mattress.Type === 'Latex');
                                setMattresses(orthopaedicMattresses);
                              }else  if(CallingFrom==='Miracoil'){
                                const orthopaedicMattresses = response.data.filter(mattress => mattress.Type === 'Miracoil');
                                setMattresses(orthopaedicMattresses);
                              }else  if(CallingFrom==='NaturalFillings'){
                                const orthopaedicMattresses = response.data.filter(mattress => mattress.Type === 'Natural Fillings');
                                setMattresses(orthopaedicMattresses);
                              }else  if(CallingFrom==='CutBedMattresses'){
                                const orthopaedicMattresses = response.data.filter(mattress => mattress.Type === 'Cut Bed Mattresses');
                                setMattresses(orthopaedicMattresses);
                              }else  if(CallingFrom==='KidsMattresses'){
                                const orthopaedicMattresses = response.data.filter(mattress => mattress.Type === 'Kids Mattresses');
                                setMattresses(orthopaedicMattresses);
                              }else  if(CallingFrom==='NextDayMattresses'){
                                const orthopaedicMattresses = response.data.filter(mattress => mattress.Type === 'Next Day Mattresses');
                                setMattresses(orthopaedicMattresses);
                              }
                              else  if(CallingFrom==='SuperKingsBeds'){
                                const orthopaedicMattresses = response.data.filter(mattress => mattress.size === 'Super Kings Beds');
                                setMattresses(orthopaedicMattresses);
                              }  else  if(CallingFrom==='KingSizeBeds'){
                                const orthopaedicMattresses = response.data.filter(mattress => mattress.size === 'King Size Beds');
                                setMattresses(orthopaedicMattresses);
                              }else  if(CallingFrom==='DoubleBeds'){
                                const orthopaedicMattresses = response.data.filter(mattress => mattress.size === 'Double Beds');
                                setMattresses(orthopaedicMattresses);
                              }else  if(CallingFrom==='SmallDoubleBeds'){
                                const orthopaedicMattresses = response.data.filter(mattress => mattress.size === 'Small Double Beds');
                                setMattresses(orthopaedicMattresses);
                              }else  if(CallingFrom==='SingleBeds'){
                                const orthopaedicMattresses = response.data.filter(mattress => mattress.size === 'Single Beds');
                                setMattresses(orthopaedicMattresses);
                              }
                              else  if(CallingFrom==='SmallSingleBeds'){
                                const orthopaedicMattresses = response.data.filter(mattress => mattress.size === 'Small Single Beds');
                                setMattresses(orthopaedicMattresses);
                              }


                 //   if(CallingFrom==='MemoryFoam'){
                //     const orthopaedicMattresses = response.data.filter(mattress => mattress.Type === 'Memory Foam');
                //     setMattresses(orthopaedicMattresses);
                //   }else  if(CallingFrom==='PocketSprung'){
                //     const orthopaedicMattresses = response.data.filter(mattress => mattress.Type === 'Pocket Sprung');
                //     setMattresses(orthopaedicMattresses);
                //   }else  if(CallingFrom==='Orthopaedic'){
                //     const orthopaedicMattresses = response.data.filter(mattress => mattress.Type === 'Orthopaedic');
                //     setMattresses(orthopaedicMattresses);
                //   }else  if(CallingFrom==='Latex'){
                //     const orthopaedicMattresses = response.data.filter(mattress => mattress.Type === 'Latex');
                //     setMattresses(orthopaedicMattresses);
                //   }else  if(CallingFrom==='Miracoil'){
                //     const orthopaedicMattresses = response.data.filter(mattress => mattress.Type === 'Miracoil');
                //     setMattresses(orthopaedicMattresses);
                //   }else  if(CallingFrom==='KidsMattresses'){
                //     const orthopaedicMattresses = response.data.filter(mattress => mattress.Type === 'Kids Mattresses');
                //     setMattresses(orthopaedicMattresses);
                //   }
                //   else  if(CallingFrom==='NextDayMattresses'){
                //     const orthopaedicMattresses = response.data.filter(mattress => mattress.Type === 'Next Day Mattresses');
                //     setMattresses(orthopaedicMattresses);
                //   } else  if(CallingFrom==='CutBedMattresses'){
                //     const orthopaedicMattresses = response.data.filter(mattress => mattress.Type === 'Cut Bed Mattresses');
                //     setMattresses(orthopaedicMattresses);
                //   }else  if(CallingFrom==='NaturalFillings'){
                //     const orthopaedicMattresses = response.data.filter(mattress => mattress.Type === 'Natural Fillings');
                //     setMattresses(orthopaedicMattresses);
                //   }else  if(CallingFrom==='ExtraFirm'){
                //     const orthopaedicMattresses = response.data.filter(mattress => mattress.firmness === 'Extra Firm');
                //     setMattresses(orthopaedicMattresses);
                //   }else  if(CallingFrom==='Firm'){
                //     const orthopaedicMattresses = response.data.filter(mattress => mattress.firmness === 'Firm');
                //     setMattresses(orthopaedicMattresses);
                //   }
                //   else  if(CallingFrom==='MediumFirm'){
                //     const orthopaedicMattresses = response.data.filter(mattress => mattress.firmness === 'Medium Firm');
                //     setMattresses(orthopaedicMattresses);
                //   } else  if(CallingFrom==='Medium'){
                //     const orthopaedicMattresses = response.data.filter(mattress => mattress.firmness === 'Medium');
                //     setMattresses(orthopaedicMattresses);
                //   }else  if(CallingFrom==='SoftFirm'){
                //     const orthopaedicMattresses = response.data.filter(mattress => mattress.firmness === 'Soft Firm');
                //     setMattresses(orthopaedicMattresses);
                //   }else  if(CallingFrom==='SuperKing'){
                //     const orthopaedicMattresses = response.data.filter(mattress => mattress.size === `Super King(6')`);
                //     setMattresses(orthopaedicMattresses);
                //   }else  if(CallingFrom==='KingSize'){
                //     const orthopaedicMattresses = response.data.filter(mattress => mattress.size === `King Size(5')`);
                //     setMattresses(orthopaedicMattresses);
                //   }else  if(CallingFrom==='Double'){
                //     const orthopaedicMattresses = response.data.filter(mattress => mattress.size === `Double(4' 6'')`);
                //     setMattresses(orthopaedicMattresses);
                //   }else  if(CallingFrom==='SmallDouble'){
                //     const orthopaedicMattresses = response.data.filter(mattress => mattress.size === `Small Double(4')`);
                //     setMattresses(orthopaedicMattresses);
                //   }else  if(CallingFrom==='Single'){
                //     const orthopaedicMattresses = response.data.filter(mattress => mattress.size === `Single(3')`);
                //     setMattresses(orthopaedicMattresses);
                //   }else  if(CallingFrom==='SmallSingle'){
                //     const orthopaedicMattresses = response.data.filter(mattress => mattress.size === `Small Single(2' 6'')`);
                //     setMattresses(orthopaedicMattresses);
                //   }else  if(CallingFrom==='European'){
                //     const orthopaedicMattresses = response.data.filter(mattress => mattress.size === `European`);
                //     setMattresses(orthopaedicMattresses);
                //   }else  if(CallingFrom==='Mattress'){
                //     // const orthopaedicMattresses = response.data.filter(mattress => mattress.size === `European`);
                //     setMattresses(response.data);
                //   }
                
              } catch (error) {
                  console.error('Error fetching data:', error);
              }
          };
    
          fetchMattresses();
      }, []);
    return (
        mattresses.map((item,index)=>(
        selectedGrid === 0 ? <div className={`flex p-[20px] md:gap-x-4  border border-primary ${index >= 0 && index < 9 ? "border-b-0" : ""} `}>
            <div className="overflow-hidden rounded-t-xl relative " >
                <span ref={icon1Ref} className='absolute left-5 top-2 text-white hidden z-10'><i className='font-extralight fa fa-regular fa-heart'></i></span>
                <span ref={icon2Ref} className='absolute left-5 top-8 text-white hidden z-10'><i className='font-extralight fa fa-solid fa-code-compare'></i></span>
                {item.discount.length ? <div className='absolute right-5 top-8 h-12 w-12  bg-primary rounded-full z-10 flex items-center justify-center text-white'>{item.discount}</div> : ""}
                <img src={isMattresses ? `${item.image}` : `${item.image}`} ref={imageRef}
                    alt="Product" className="h-[180px] w-[220px]  rounded-t-xl duration-1000 hover:scale-125 " />
            </div>
            <div className='flex items-center flex-wrap justify-between w-full '>
                {!isMattresses && <div className='text-center pt-3'>
                    <a className=" bg-primary p-3 px-2 xs:ms-[0px] ms-[6px] text-white rounded-md">
                        <span>Customize your bed</span>
                    </a>
                </div>}

                <div className="px-4 py-3">
                    <span className="text-gray-400 mr-3 text-xs  hover:text-primary duration-500">{item.description}</span>
                    <span className="text-black text-sm hover:text-primary duration-500 block capitalize font-medium">{item.name}</span>
                    <div className="flex items-center">
                        {item.discount.length ? <React.Fragment><del>
                            <p className="text-sm text-gray-400 cursor-auto me-2">{item.price}</p>
                        </del>
                            <p className="text-sm cursor-auto text-red-600">{item.price}</p></React.Fragment> :
                            <p className="text-sm cursor-auto text-gray-400">{item.price}</p>}
                    </div>
                </div>
            </div>

        </div> : <div className="min-w-full min-h-full bg-white shadow-md rounded-xl  hover:shadow-xl overflow-hidden">
            <div className="overflow-hidden relative">
                <span ref={icon1Ref} className='absolute left-5 top-2 text-white hidden z-10'><i className='font-extralight fa fa-regular fa-heart'></i></span>
                <span ref={icon2Ref} className='absolute left-5 top-8 text-white hidden z-10'><i className='font-extralight fa fa-solid fa-code-compare'></i></span>
                {item.discount.length ? <div className='absolute right-5 top-8 h-12 w-12  bg-primary rounded-full z-10 flex items-center justify-center text-white'>{item.discount}</div> : ""}
                <img src={isMattresses ? `${item.image}` : `${item.image}`} ref={imageRef} style={{width:'100%'}}
                    alt="Product" className="object-cover rounded-t-xl duration-1000 hover:scale-125" />
            </div>
            <div className='text-center pt-3'>
                {!isMattresses && <a className="byb-badge">
                    <span>Customize your bed</span>
                </a>}
            </div>
            <div className="px-4 py-3">
                <span className="text-gray-400 mr-3 text-xs  hover:text-primary duration-500">{item?.description}</span>
                <span className="text-black text-sm hover:text-primary duration-500 block capitalize font-medium">{item.name}</span>
                <div className="flex items-center">
                    {item.discount.length ? <React.Fragment><del>
                        <p className="text-sm text-gray-400 cursor-auto me-2">{item.price}</p>
                    </del>
                        <p className="text-sm cursor-auto text-red-600">{item.price}</p></React.Fragment> :
                        <p className="text-sm cursor-auto text-gray-400">{item.price}</p>}
                </div>
            </div>
        </div>
 ))
    )
}

export default ProductCardBeds