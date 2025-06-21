import Link from "next/link";

export default  function Footer() {
    return (
        <footer className="bg-primary">
            <div className="custom__container">
                <div >
                    <div>
                        <img 
                        src="/images/logo.svg" 
                        alt="logo" 
                        loading="lazy"
                        />

                        <p>
                            Lorem ipsum dolor sit amet consectetur. Nam cras ut sit arcu varius dictumst id. Amet pulvinar ac mauris tortor commodo eget. Bibendum at ornare vitae sit sed. Faucibus consequat est a nec sed sit venenatis. Ut amet nisi in bibendum faucibus tincidunt dolor leo aenean. Ornare facilisi vitae consectetur molestie nunc egestas non ut.
                        </p>
                    </div>
                    <div>
                                            <div>
                        <h3>Shop</h3>
                        <ul>
                            <li><Link href={""}>Eye</Link></li>
                            <li><Link href={""}>Face</Link></li>
                            <li><Link href={""}>Body</Link></li>
                            <li><Link href={""}>Lips</Link></li>
                            <li><Link href={""}>Perfume</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3>Shop</h3>
                        <ul>
                            <li><Link href={""}>Eye</Link></li>
                            <li><Link href={""}>Face</Link></li>
                            <li><Link href={""}>Body</Link></li>
                            <li><Link href={""}>Lips</Link></li>
                            <li><Link href={""}>Perfume</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3>Shop</h3>
                        <ul>
                            <li><Link href={""}>View the latest makeup trends and tips!</Link></li>
                        </ul>
                    </div>
                    </div>
                </div>
            </div> 
        </footer>
    )
}