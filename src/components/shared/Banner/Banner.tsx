import Image from "next/image";
import styles from "./Banner.module.css";

const Banner = () => {
  return (
    <div className={styles.banner_container}>
      <div className={styles.left_content}>
        <div className="text-center sm:text-left">
        
          <h1 className="text-4xl">Hello,Its Me
Moriom Afrin Soya
a passionate Web Developer</h1>
          <p className="text-gray-400 mt-3 w-3/4 mx-auto sm:mx-0">
            <i>
            With a background in WebDevelopment I specialize in HTML,CSS& JavaScript, striving to create beautiful, user-friendly solutions that leave a lasting impact.
            </i>
          </p>
        </div>
      </div>
      <div className={styles.right_image}>
        <figure>
          <Image
            src="https://i.ibb.co/NgMFLXNt/img1.png"  // Direct URL as a string
            width={600}
            height={100}
            alt="blog image"
            className="rounded-t-lg h-64 object-cover"
          />
        </figure>
      </div>
    </div>
  );
};

export default Banner;
