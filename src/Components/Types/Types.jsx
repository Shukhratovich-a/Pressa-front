import useTypes from "../../Hooks/useTypes";

import Radio from "../Lib/Inputs/Radio/Radio";

import Online from "../Lib/Icons/Online";
import Offline from "../Lib/Icons/Offline";

import styles from "./Types.module.scss";

const Type = () => {
  const [type, setType] = useTypes();

  const types = [
    { title: "online", icon: Online },
    { title: "offline", icon: Offline },
  ];

  const handleCheck = (evt) => {
    if (evt.target.checked) setType(evt.target.value);
  };

  return (
    <div className={styles.types}>
      <ul className={styles.types__list}>
        {types.length > 0 &&
          types.map((item) => (
            <li className={styles.type} key={item.title}>
              <label className={styles.type__label}>
                <item.icon />
                <span className={styles.type__text}>{item.title}</span>
                <Radio
                  value={item.title}
                  isChecked={item.title === type ? true : false}
                  onChange={handleCheck}
                  name="type"
                />
              </label>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Type;
