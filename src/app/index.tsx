import { ScrollView, View, Text, Pressable } from 'react-native';
import { router } from 'expo-router';

const tasks = [
{ id: '1', title: 'Study React Native', time: '09:00 AM', icon: '📚' },
{ id: '2', title: 'Practice Coding', time: '11:00 AM', icon: '💻' },
{ id: '3', title: 'Complete Assignment', time: '02:00 PM', icon: '📝' },
];

export default function HomeScreen() {
return (
<ScrollView
style={{ flex: 1, backgroundColor: '#102B24' }}
contentContainerStyle={{ padding: 20, paddingBottom: 35 }}
showsVerticalScrollIndicator={false}
>
{/* Header */}
<View
style={{
flexDirection: 'row',
justifyContent: 'space-between',
alignItems: 'center',
}}
>
<View>
<Text style={{ color: '#A8B9AD', fontSize: 12, letterSpacing: 1 }}>
STUDENT PRODUCTIVITY
</Text>

      <Text
        style={{
          color: '#F4F0E5',
          fontSize: 27,
          fontWeight: 'bold',
          marginTop: 5,
        }}
      >
        TaskFlow ✨
      </Text>
    </View>

    <View
      style={{
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: '#345448',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#6B8774',
      }}
    >
      <Text style={{ fontSize: 24 }}>👩‍🎓</Text>
    </View>
  </View>

  {/* Welcome Card */}
  <View
    style={{
      backgroundColor: '#1C4034',
      borderRadius: 24,
      padding: 22,
      marginTop: 26,
      borderWidth: 1,
      borderColor: '#456556',
    }}
  >
    <Text
      style={{
        color: '#DCE7C4',
        fontSize: 12,
        letterSpacing: 1,
      }}
    >
      YOUR PERSONAL STUDY SPACE
    </Text>

    <Text
      style={{
        color: '#F4F0E5',
        fontSize: 29,
        fontWeight: 'bold',
        marginTop: 15,
      }}
    >
      Make today
    </Text>

    <Text
      style={{
        color: '#F4F0E5',
        fontSize: 29,
        fontWeight: 'bold',
      }}
    >
      count. 🌿
    </Text>

    <Text
      style={{
        color: '#C0D0C4',
        fontSize: 14,
        lineHeight: 22,
        marginTop: 10,
      }}
    >
      Small steps every day lead to big achievements.
    </Text>

    <Pressable
      onPress={() => router.push('/tasks')}
      style={({ pressed }) => ({
        backgroundColor: pressed ? '#C4D5A8' : '#DCE7C4',
        paddingVertical: 14,
        paddingHorizontal: 20,
        borderRadius: 25,
        alignSelf: 'flex-start',
        marginTop: 20,
        opacity: pressed ? 0.85 : 1,
      })}
    >
      <Text style={{ color: '#17382C', fontWeight: 'bold' }}>
        View My Tasks  →
      </Text>
    </Pressable>
  </View>

  {/* Daily Progress */}
  <View
    style={{
      backgroundColor: '#F4F0E5',
      borderRadius: 22,
      padding: 20,
      marginTop: 22,
    }}
  >
    <Text
      style={{
        color: '#52675A',
        fontSize: 12,
        letterSpacing: 1,
      }}
    >
      YOUR DAILY PROGRESS
    </Text>

    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 12,
      }}
    >
      <Text
        style={{
          color: '#17382C',
          fontSize: 24,
          fontWeight: 'bold',
        }}
      >
        2 of 5 tasks
      </Text>

      <Text style={{ color: '#426B52', fontWeight: 'bold' }}>
        40%
      </Text>
    </View>

    <View
      style={{
        height: 9,
        backgroundColor: '#D7DDCE',
        borderRadius: 10,
        marginTop: 15,
        overflow: 'hidden',
      }}
    >
      <View
        style={{
          width: '40%',
          height: '100%',
          backgroundColor: '#527D5D',
          borderRadius: 10,
        }}
      />
    </View>

    <Text
      style={{
        color: '#66786A',
        fontSize: 12,
        marginTop: 12,
      }}
    >
      Keep going! You're doing great 🌱
    </Text>
  </View>

  {/* Statistics */}
  <View
    style={{
      flexDirection: 'row',
      gap: 10,
      marginTop: 22,
    }}
  >
    <View
      style={{
        flex: 1,
        backgroundColor: '#1C4034',
        padding: 13,
        borderRadius: 18,
        borderWidth: 1,
        borderColor: '#345448',
      }}
    >
      <Text style={{ fontSize: 22 }}>📋</Text>

      <Text
        style={{
          color: '#F4F0E5',
          fontSize: 24,
          fontWeight: 'bold',
          marginTop: 10,
        }}
      >
        05
      </Text>

      <Text style={{ color: '#B7C9BB', fontSize: 11 }}>
        Total Tasks
      </Text>
    </View>

    <View
      style={{
        flex: 1,
        backgroundColor: '#1C4034',
        padding: 13,
        borderRadius: 18,
        borderWidth: 1,
        borderColor: '#345448',
      }}
    >
      <Text style={{ fontSize: 22 }}>✓</Text>

      <Text
        style={{
          color: '#F4F0E5',
          fontSize: 24,
          fontWeight: 'bold',
          marginTop: 10,
        }}
      >
        02
      </Text>

      <Text style={{ color: '#B7C9BB', fontSize: 11 }}>
        Completed
      </Text>
    </View>

    <View
      style={{
        flex: 1,
        backgroundColor: '#1C4034',
        padding: 13,
        borderRadius: 18,
        borderWidth: 1,
        borderColor: '#345448',
      }}
    >
      <Text style={{ fontSize: 22 }}>⏳</Text>

      <Text
        style={{
          color: '#F4F0E5',
          fontSize: 24,
          fontWeight: 'bold',
          marginTop: 10,
        }}
      >
        03
      </Text>

      <Text style={{ color: '#B7C9BB', fontSize: 11 }}>
        Remaining
      </Text>
    </View>
  </View>

  {/* Upcoming Tasks Heading */}
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 30,
      marginBottom: 15,
    }}
  >
    <Text
      style={{
        color: '#F4F0E5',
        fontSize: 21,
        fontWeight: 'bold',
      }}
    >
      Upcoming Tasks
    </Text>

    <Pressable onPress={() => router.push('/tasks')}>
      <Text
        style={{
          color: '#DCE7C4',
          fontSize: 13,
          fontWeight: 'bold',
        }}
      >
        See all →
      </Text>
    </Pressable>
  </View>

  {/* Task Cards */}
  {tasks.map((task) => (
    <Pressable
      key={task.id}
      onPress={() => router.push('/tasks')}
      style={({ pressed }) => ({
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: pressed ? '#294D3E' : '#1C4034',
        borderRadius: 18,
        padding: 16,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#345448',
      })}
    >
      <View
        style={{
          width: 46,
          height: 46,
          borderRadius: 14,
          backgroundColor: '#345448',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text style={{ fontSize: 22 }}>{task.icon}</Text>
      </View>

      <View style={{ flex: 1, marginLeft: 13 }}>
        <Text
          style={{
            color: '#F4F0E5',
            fontSize: 14,
            fontWeight: 'bold',
          }}
        >
          {task.title}
        </Text>

        <Text
          style={{
            color: '#B7C9BB',
            fontSize: 12,
            marginTop: 6,
          }}
        >
          {task.time}
        </Text>
      </View>

      <Text style={{ color: '#DCE7C4', fontSize: 24 }}>
        ›
      </Text>
    </Pressable>
  ))}

  {/* Create New Task Button */}
  <Pressable
    onPress={() => router.push('/add-task')}
    style={({ pressed }) => ({
      backgroundColor: pressed ? '#C4D5A8' : '#DCE7C4',
      padding: 17,
      borderRadius: 18,
      alignItems: 'center',
      marginTop: 8,
      opacity: pressed ? 0.85 : 1,
    })}
  >
    <Text
      style={{
        color: '#17382C',
        fontSize: 16,
        fontWeight: 'bold',
      }}
    >
      +  Create New Task
    </Text>
  </Pressable>

  {/* Footer */}
  <Text
    style={{
      color: '#82998A',
      textAlign: 'center',
      fontSize: 12,
      marginTop: 24,
      marginBottom: 8,
    }}
  >
    Stay focused • Grow every day 🌿
  </Text>
</ScrollView>

);
}
           