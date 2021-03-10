import React from 'react';
import styles from './Statistics.module.css';

export default function Statistics({title, stats}) {
    return (
        <div className={styles.statistics}>
            <h2 className={styles.title}>{title}</h2>

            <ul className={styles.list}>
                <li className={styles.item1} id={styles.firstItem}>
                    <span className={styles.label}>{stats[0].label}</span>
                    <span className={styles.percentage}>{stats[0].percentage}%</span>
                </li>
                <li className={styles.item2} id={styles.secondItem}>
                    <span className={styles.label}>{stats[1].label}</span>
                    <span className={styles.percentage}>{stats[1].percentage}%</span>
                </li>
                <li className={styles.item3} id={styles.thirdItem}>
                    <span className={styles.label}>{stats[2].label}</span>
                    <span className={styles.percentage}>{stats[2].percentage}%</span>
                </li>
                <li className={styles.item4} id={styles.fourthItem}>
                    <span className={styles.label}>{stats[3].label}</span>
                    <span className={styles.percentage}>{stats[3].percentage}%</span>
                </li>
            </ul>
        </div>
    )
}
