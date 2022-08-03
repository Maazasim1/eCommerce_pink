import Head from 'next/head'
import Image from 'next/image'
import TopNav from '../components/topNav'
import MiddleNav from '../components/middleNav'
import BottomNav from '../components/bottomNav'
import ProductCard from '../components/Card'
import Search from '../components/Search'
import Paginations from '../components/Paginations'

export default function Home() {
  return (
    <div>
      <TopNav />
      <MiddleNav />
      <BottomNav />

      <div className='sm:pl-[200px] sm:pr-[200px] pl-[30px] pr-[30px] w-full pt-[150px]'>
        <div className='flex flex-row w-full'>
        <h1 className='text-black dark:text-white opacity-70 text-4xl font-bold pb-10 grow-0'>Trending Now</h1>
        <div className='grow'>

        </div>
        <Search />

        </div>

        <div className='grid sm:grid-cols-4 sm:gap-10 grid-cols-1'>
          <ProductCard image="https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
          <ProductCard image="https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
          <ProductCard image="https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
          <ProductCard image="https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
          <ProductCard image="https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
          <ProductCard image="https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
          <ProductCard image="https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />          
        </div>
        <Paginations />

      </div>
    </div>
  )
}
