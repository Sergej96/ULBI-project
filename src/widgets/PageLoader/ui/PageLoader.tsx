import {FC} from "react"
import cls from "./PageLoader.module.scss"
import Loader from "shared/ui/Loader/Loader";

interface PageLoaderProps {}

const PageLoader:FC<PageLoaderProps> = () => {
  return (
    <div className={cls.pageLoader}>
      <Loader/>
    </div>
  )
};

export default PageLoader
