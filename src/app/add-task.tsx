
import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  Alert,
  ScrollView,
} from 'react-native';

export default function AddTaskScreen() {
  const [task, setTask] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('Medium');

  const handleAddTask = () => {
    if (!task.trim()) {
      Alert.alert('Missing Task', 'Please enter a task name.');
      return;
    }

    Alert.alert(
      'Task Created!',
      `${task} has been added successfully.`
    );

    setTask('');
    setDescription('');
    setPriority('Medium');
  };

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: '#102B24' }}
      contentContainerStyle={{ padding: 22 }}
      keyboardShouldPersistTaps="handled"
    >
      <Text style={{ color: '#A8B9AD', fontSize: 12 }}>
        PLAN YOUR DAY
      </Text>

      <Text style={{
        color: '#F4F0E5',
        fontSize: 29,
        fontWeight: 'bold',
        marginTop: 8,
      }}>
        Create a Task 🌿
      </Text>

      <Text style={{
        color: '#B7C9BB',
        fontSize: 14,
        marginTop: 8,
        lineHeight: 21,
      }}>
        Turn your goals into small, achievable steps.
      </Text>

      <View style={{
        backgroundColor: '#1C4034',
        padding: 20,
        borderRadius: 22,
        marginTop: 26,
        borderWidth: 1,
        borderColor: '#345448',
      }}>
        <Text style={{
          color: '#F4F0E5',
          fontSize: 17,
          fontWeight: 'bold',
          marginBottom: 20,
        }}>
          Task Details
        </Text>

        <Text style={{ color: '#DCE7C4', marginBottom: 9 }}>
          Task Name *
        </Text>

        <TextInput
          value={task}
          onChangeText={setTask}
          placeholder="e.g. Study React Native"
          placeholderTextColor="#82998A"
          style={{
            backgroundColor: '#102B24',
            color: '#F4F0E5',
            padding: 15,
            borderRadius: 13,
            borderWidth: 1,
            borderColor: '#456556',
            marginBottom: 20,
          }}
        />

        <Text style={{ color: '#DCE7C4', marginBottom: 9 }}>
          Description
        </Text>

        <TextInput
          value={description}
          onChangeText={setDescription}
          placeholder="Write a few details..."
          placeholderTextColor="#82998A"
          multiline
          numberOfLines={4}
          textAlignVertical="top"
          style={{
            backgroundColor: '#102B24',
            color: '#F4F0E5',
            padding: 15,
            minHeight: 100,
            borderRadius: 13,
            borderWidth: 1,
            borderColor: '#456556',
            marginBottom: 22,
          }}
        />

        <Text style={{ color: '#DCE7C4', marginBottom: 12 }}>
          Priority Level
        </Text>

        <View style={{
          flexDirection: 'row',
          gap: 8,
          marginBottom: 25,
        }}>
          {['Low', 'Medium', 'High'].map((level) => (
            <Pressable
              key={level}
              onPress={() => setPriority(level)}
              style={{
                flex: 1,
                paddingVertical: 12,
                alignItems: 'center',
                borderRadius: 12,
                backgroundColor:
                  priority === level ? '#DCE7C4' : '#102B24',
                borderWidth: 1,
                borderColor: '#456556',
              }}
            >
              <Text style={{
                color: priority === level ? '#17382C' : '#F4F0E5',
                fontWeight: 'bold',
                fontSize: 13,
              }}>
                {level}
              </Text>
            </Pressable>
          ))}
        </View>

        <Pressable
          onPress={handleAddTask}
          style={{
            backgroundColor: '#DCE7C4',
            padding: 16,
            borderRadius: 15,
            alignItems: 'center',
          }}
        >
          <Text style={{
            color: '#17382C',
            fontWeight: 'bold',
            fontSize: 16,
          }}>
            + Create Task
          </Text>
        </Pressable>
      </View>

      <Text style={{
        color: '#82998A',
        textAlign: 'center',
        marginTop: 22,
        marginBottom: 10,
      }}>
        One task at a time. You've got this! ✨
      </Text>
    </ScrollView>
  );
}
