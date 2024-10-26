import styles from "./goal-post.module.css"
import classnames from "classnames"
import { ComponentProps } from "react"

export default function GoalPost({ className }: ComponentProps<"div">) {
    return (
        <div className={classnames(styles["ml1-GoalPost"], className)}>
            <div className={styles["ml1-GoalPost_BackNet"]} />
            <div className={styles["ml1-GoalPost_FarSideNet"]} />
            <div className={styles["ml1-GoalPost_NearSideNet"]} />
            <div className={styles["ml1-GoalPost_TopNet"]} />
        </div>
    )
}
