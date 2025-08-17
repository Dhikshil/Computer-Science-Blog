import DATA from  '../../FOOTERINFO.js'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="container mx-auto py-14 px-6">
        <div className="flex gap-7 justify-between px-24 mb-16">
          {DATA.map((data) => {
            return (
              <div className="flex flex-col mb- 3" key={data.name}>
                <h3><b>{data.name}</b></h3>
                {data.links.map((element) => {
                  return (
                    <a href="" className="hover:text-blue-300 hover:underline" key={element}>{element}</a>
                  )
                })}
              </div>
            )
          })}
        </div>
        <p className="text-center"><span>&copy;</span>2025 Computer Science Blog</p>
      </div>
    </footer>
  )
}