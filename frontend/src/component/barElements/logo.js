export default function Logo(logoUrl) {
    return <div className="logo" style={{backgroundImage:"url("+logoUrl.logoUrl+")"}}></div>
}
//have to change logourl.logourl to logourl when using .type()