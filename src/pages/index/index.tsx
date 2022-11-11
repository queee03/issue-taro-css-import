import { APP_TITLE } from "@/configs/constant";
import styles from "./index.module.less";

const Index = () => {
  return (
    <view>
      {APP_TITLE}
      <view className={styles.bg1}></view>
      <view className={styles.bg2}></view>
    </view>
  );
};

export default Index;
