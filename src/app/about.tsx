
import { View, Text, ScrollView } from 'react-native';

export default function AboutScreen() {
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: '#102B24' }}
      contentContainerStyle={{ padding: 22 }}
    >
      <Text style={{ color: '#A8B9AD', fontSize: 12 }}>
        GET TO KNOW US
      </Text>

      <Text style={{
        color: '#F4F0E5',
        fontSize: 29,
        fontWeight: 'bold',
        marginTop: 8,
      }}>
        About TaskFlow 🌿
      </Text>

      <Text style={{
        color: '#B7C9BB',
        fontSize: 14,
        marginTop: 8,
        lineHeight: 22,
      }}>
        A peaceful space to organize your goals and build better habits.
      </Text>

      {/* Profile Card */}
      <View style={{
        backgroundColor: '#1C4034',
        padding: 25,
        borderRadius: 24,
        alignItems: 'center',
        marginTop: 25,
        borderWidth: 1,
        borderColor: '#456556',
      }}>
        <View style={{
          width: 95,
          height: 95,
          borderRadius: 48,
          backgroundColor: '#345448',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <Text style={{ fontSize: 43 }}>👩‍🎓</Text>
        </View>

        <Text style={{
          color: '#F4F0E5',
          fontSize: 23,
          fontWeight: 'bold',
          marginTop: 16,
        }}>
          Student Productivity
        </Text>

        <Text style={{
          color: '#DCE7C4',
          fontSize: 13,
          marginTop: 7,
        }}>
          Learn • Plan • Achieve
        </Text>
      </View>

      {/* About Section */}
      <View style={{
        backgroundColor: '#1C4034',
        padding: 20,
        borderRadius: 20,
        marginTop: 20,
      }}>
        <Text style={{
          color: '#DCE7C4',
          fontSize: 18,
          fontWeight: 'bold',
        }}>
          Our Purpose
        </Text>

        <Text style={{
          color: '#D1DDD3',
          fontSize: 14,
          lineHeight: 24,
          marginTop: 12,
        }}>
          TaskFlow helps students manage daily tasks, organize study
          schedules, track progress, and stay motivated. It makes
          productivity simple, calm, and enjoyable.
        </Text>
      </View>

      {/* Features */}
      <Text style={{
        color: '#F4F0E5',
        fontSize: 21,
        fontWeight: 'bold',
        marginTop: 27,
        marginBottom: 14,
      }}>
        What You Can Do
      </Text>

      {[
        { icon: '📋', title: 'Organize Tasks', detail: 'Keep your daily work organized.' },
        { icon: '📈', title: 'Track Progress', detail: 'See your daily achievements.' },
        { icon: '🎯', title: 'Stay Focused', detail: 'Work towards your goals.' },
      ].map((item) => (
        <View
          key={item.title}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#1C4034',
            padding: 16,
            borderRadius: 16,
            marginBottom: 11,
          }}
        >
          <Text style={{ fontSize: 27 }}>{item.icon}</Text>

          <View style={{ marginLeft: 14, flex: 1 }}>
            <Text style={{
              color: '#F4F0E5',
              fontSize: 15,
              fontWeight: 'bold',
            }}>
              {item.title}
            </Text>

            <Text style={{
              color: '#B7C9BB',
              fontSize: 12,
              marginTop: 5,
            }}>
              {item.detail}
            </Text>
          </View>
        </View>
      ))}

      {/* App Information */}
      <View style={{
        backgroundColor: '#DCE7C4',
        padding: 20,
        borderRadius: 20,
        marginTop: 12,
      }}>
        <Text style={{
          color: '#17382C',
          fontSize: 18,
          fontWeight: 'bold',
        }}>
          App Information
        </Text>

        <Text style={{ color: '#42604B', marginTop: 14 }}>
          App Name: TaskFlow
        </Text>

        <Text style={{ color: '#42604B', marginTop: 9 }}>
          Category: Student Productivity
        </Text>

        <Text style={{ color: '#42604B', marginTop: 9 }}>
          Version: 1.0.0
        </Text>
      </View>

      <Text style={{
        color: '#82998A',
        textAlign: 'center',
        marginTop: 25,
        marginBottom: 10,
      }}>
        Grow a little every day 🌱
      </Text>
    </ScrollView>
  );
}
