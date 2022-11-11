import { APP_TITLE } from "@/configs/constant";
import styles from "./index.module.less";

const Index = () => {
  return (
    <view>
      {APP_TITLE}
      用相对路径引入的图片，正常显示：
      <view className={styles.bg1}></view>
      用路径别名引入的图片，提示“本地资源图片无法通过 WXSS 获取”，无法显示：
      <view className={styles.bg2}></view>
    </view>
  );
};

export default Index;
