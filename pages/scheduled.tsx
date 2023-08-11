import { Scheduled } from "@/component";
import Week from "@/component/schedule/Week";
import styles from "@/component/schedule/scheduled.module.css"
import { useState } from "react";

const ScheduledBook = () => {
    return (
        <div className={styles.schedule}>
          <Week />
        </div>
     );
}
 
export default ScheduledBook;