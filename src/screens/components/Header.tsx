import React, {PropsWithChildren} from 'react';
import {Dimensions, Text, View} from 'react-native';
import styles from '../Styles';

type HeaderProps = PropsWithChildren<{
  totalTasks: number;
  doneTasks: number;
}>;
const {width, height} = Dimensions.get('window');
export function Header({
  totalTasks,
  doneTasks,
}: HeaderProps): React.JSX.Element {
  const circleSize = Math.min(width, height) * 0.22;

  return (
    <View style={styles.sectionContainer}>
      <View style={styles.containerDesc}>
        <Text style={styles.lblDone}>Todo Done</Text>
        <Text style={styles.lblEncouragement}>Keep it up</Text>
      </View>
      <View
        style={[
          styles.numberContainer,
          {height: circleSize, width: circleSize, borderRadius: circleSize / 2},
        ]}>
        <Text style={styles.tasksNumberLabel}>{totalTasks}</Text>
        <Text style={styles.tasksNumberLabel}>{'/' + doneTasks ?? '0'}</Text>
      </View>
    </View>
  );
}
