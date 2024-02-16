import { useState } from "react";
import styles from "./welcome.module.css"

const Welcome = () => {
  const [username, setUsername] = useState("");

  function handleClick() {
    console.log(username);
    localStorage.setItem("username", username);
  }

  return (
    <>
    
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.img}>
              <img
                src="https://s3-alpha-sig.figma.com/img/5f2f/cc9b/ff4319959cc2d700d6754a2d2203780b?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oDDw2JJRWQkpxGpyal21xLOMvV9GsmL01DxUoNQJ~DcwNejtFt4rwXF~c5VVOYiNGshtw4LNszZk9fWyjG5oX2SkYyeq3PEwCvB7EB2r5frTI6jHe0mLKCCPPWxPjdBDpUufTUzaynRaaW3F2eT4DZgHS2DYrd0mbvViCrZ2Lb0-yLvOgqzYD1SjqoINqelwixMuY0J3QdjN2SEH19pSKFvLfcVD~LL-eK75hAnOCLSifuZQkIf-o-g~C5-Kh1e7zvBDHZ3SxCfdBSzf6ILlUARTSu8067whCJPB2zD-K6DmdKJgZIWtq7umrP8CmMuRn5TSPKpIES-NZU4ieEsUuA__"
                alt=""
              />
            </div>
            <div className={styles.contInputs}>
              <input
                className={styles.input}
                type="text"
                name="username"
                id="username"
                placeholder="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <button  className={styles.button} onClick={handleClick}>
                Enter
              </button>
            </div>
            <div>
            </div>
          </div>
        </div>
      
    </>
  );
};

export default Welcome;
