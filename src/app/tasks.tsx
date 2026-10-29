
import { View, Text, FlatList, Pressable, ScrollView } from 'react-native';
import { router } from 'expo-router';

const tasks = [
  {
    id: '1',
    title: 'Study React Native',
    category: 'Learning',
    time: '09:00 AM',
    icon: '📚',
    priority: 'High',
  },
  {
    id: '2',
    title: 'Practice Coding',
    category: 'Development',
    time: '11:00 AM',
    icon: '💻',
    priority: 'Medium',
  },
  {
    id: '3',
    title: 'Complete Assignment',
    category: 'University',
    time: '02:00 PM',
    icon: '📝',
    priority: 'High',
  },
  {
    id: '4',
    title: 'Revise Lessons',
    category: 'Study',
    time: '05:00 PM',
    icon: '🎯',
    priority: 'Low',
  },
  {
    id: '5',
    title: 'Plan Tomorrow',
    category: 'Personal',
    time: '08:00 PM',
    icon: '🌿',
    priority: 'Medium',
  },
];

export default function TasksScreen() {
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: '#102B24' }}
      contentContainerStyle={{ padding: 20 }}
    >
      <Text style={{ color: '#A8B9AD', fontSize: 12 }}>
        YOUR DAILY PLANNER
      </Text>

      <Text style={{
        color: '#F4F0E5',
        fontSize: 29,
        fontWeight: 'bold',
        marginTop: 8,
      }}>
        My Tasks 📋
      </Text>

      <Text style={{
        color: '#B7C9BB',
        fontSize: 14,
        marginTop: 8,
      }}>
        Stay organized and make every day count.
      </Text>

      {/* Summary Card */}
      <View style={{
        backgroundColor: '#DCE7C4',
        borderRadius: 22,
        padding: 20,
        marginTop: 25,
      }}>
        <Text style={{ color: '#52675A', fontSize: 13 }}>
          TODAY'S OVERVIEW
        </Text>

        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 15,
        }}>
          <View>
            <Text style={{
              color: '#17382C',
              fontSize: 30,
              fontWeight: 'bold',
            }}>
              05
            </Text>
            <Text style={{ color: '#52675A', fontSize: 12 }}>
              Total
            </Text>
          </View>

          <View>
            <Text style={{
              color: '#17382C',
              fontSize: 30,
              fontWeight: 'bold',
            }}>
              02
            </Text>
            <Text style={{ color: '#52675A', fontSize: 12 }}>
              Completed
            </Text>
          </View>

          <View>
            <Text style={{
              color: '#17382C',
              fontSize: 30,
              fontWeight: 'bold',
            }}>
              03
            </Text>
            <Text style={{ color: '#52675A', fontSize: 12 }}>
              Pending
            </Text>
          </View>
        </View>
      </View>

      {/* Task List Heading */}
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 28,
        marginBottom: 15,
      }}>
        <Text style={{
          color: '#F4F0E5',
          fontSize: 20,
          fontWeight: 'bold',
        }}>
          All Tasks
        </Text>

        <Text style={{ color: '#DCE7C4', fontSize: 12 }}>
          5 activities
        </Text>
      </View>

      {/* Tasks */}
      {tasks.map((task, index) => (
        <View
          key={task.id}
          style={{
            backgroundColor: '#1C4034',
            borderRadius: 18,
            padding: 16,
            marginBottom: 13,
            borderWidth: 1,
            borderColor: '#345448',
          }}
        >
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
            <View style={{
              width: 48,
              height: 48,
              borderRadius: 15,
              backgroundColor: '#345448',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <Text style={{ fontSize: 23 }}>{task.icon}</Text>
            </View>

            <View style={{ flex: 1, marginLeft: 13 }}>
              <Text style={{
                color: '#F4F0E5',
                fontSize: 15,
                fontWeight: 'bold',
              }}>
                {task.title}
              </Text>

              <Text style={{
                color: '#B7C9BB',
                fontSize: 12,
                marginTop: 5,
              }}>
                {task.category}
              </Text>
            </View>

            <View style={{
              backgroundColor:
                task.priority === 'High' ? '#DCE7C4' : '#345448',
              paddingHorizontal: 10,
              paddingVertical: 6,
              borderRadius: 10,
            }}>
              <Text style={{
                color: task.priority === 'High' ? '#17382C' : '#DCE7C4',
                fontSize: 10,
                fontWeight: 'bold',
              }}>
                {task.priority}
              </Text>
            </View>
          </View>

          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 16,
            paddingTop: 12,
            borderTopWidth: 1,
            borderTopColor: '#345448',
          }}>
            <Text style={{ color: '#B7C9BB', fontSize: 12 }}>
              🕒 {task.time}
            </Text>

            <Text style={{ color: '#DCE7C4', fontSize: 12 }}>
              {index < 2 ? '✓ Completed' : '○ Pending'}
            </Text>
          </View>
        </View>
      ))}

      {/* Add Task Button */}
      <Pressable
        onPress={() => router.push('./add-task')}
        style={{
          backgroundColor: '#DCE7C4',
          padding: 17,
          borderRadius: 16,
          alignItems: 'center',
          marginTop: 8,
          marginBottom: 15,
        }}
      >
        <Text style={{
          color: '#17382C',
          fontSize: 16,
          fontWeight: 'bold',
        }}>
          + Add New Task
        </Text>
      </Pressable>

      <Text style={{
        color: '#82998A',
        textAlign: 'center',
        marginBottom: 15,
      }}>
        Progress begins with one small step 🌱
      </Text>
    </ScrollView>
  );
}
