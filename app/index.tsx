import { Ionicons } from "@expo/vector-icons";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Hello, Developer! 👋</Text>
        <Text style={styles.subGreeting}>Welcome to your awesome app</Text>
      </View>

      <View style={styles.card}>
        <View style={styles.cardIcon}>
          <Ionicons name="rocket" size={32} color="#6366f1" />
        </View>
        <Text style={styles.cardTitle}>Get Started</Text>
        <Text style={styles.cardDescription}>Explore GitHub repositories and discover amazing projects</Text>
      </View>

      <View style={styles.featuresContainer}>
        <Text style={styles.sectionTitle}>Features</Text>
        <FeatureItem
          icon="git-branch"
          title="GitHub Integration"
          description="Fetch random repositories"
        />
        <FeatureItem
          icon="search"
          title="Easy Search"
          description="Find repos by username"
        />
        <FeatureItem
          icon="star"
          title="Discover"
          description="Explore amazing projects"
        />
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Made with ❤️ by Sakib</Text>
      </View>
    </ScrollView>
  );
}

function FeatureItem({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <View style={styles.featureItem}>
      <View style={styles.featureIconBox}>
        <Ionicons name={icon as any} size={24} color="#6366f1" />
      </View>
      <View style={styles.featureContent}>
        <Text style={styles.featureTitle}>{title}</Text>
        <Text style={styles.featureDescription}>{description}</Text>
      </View>
      <Ionicons name="chevron-forward" size={20} color="#d1d5db" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9fafb",
  },
  header: {
    backgroundColor: "#6366f1",
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 30,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  greeting: {
    fontSize: 28,
    fontWeight: "700",
    color: "#ffffff",
    marginBottom: 4,
  },
  subGreeting: {
    fontSize: 16,
    color: "#e0e7ff",
    fontWeight: "500",
  },
  card: {
    backgroundColor: "#ffffff",
    marginHorizontal: 16,
    marginTop: 24,
    padding: 20,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  cardIcon: {
    width: 56,
    height: 56,
    backgroundColor: "#f3f4f6",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 14,
    color: "#6b7280",
    lineHeight: 20,
  },
  featuresContainer: {
    paddingHorizontal: 16,
    marginTop: 24,
    marginBottom: 40,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 16,
  },
  featureItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    paddingHorizontal: 16,
    paddingVertical: 14,
    marginBottom: 12,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  featureIconBox: {
    width: 44,
    height: 44,
    backgroundColor: "#f3f4f6",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  featureContent: {
    flex: 1,
  },
  featureTitle: {
    fontSize: 15,
    fontWeight: "600",
    color: "#111827",
    marginBottom: 2,
  },
  featureDescription: {
    fontSize: 13,
    color: "#6b7280",
  },
  footer: {
    paddingVertical: 16,
    alignItems: "center",
    marginBottom: 20,
  },
  footerText: {
    fontSize: 13,
    color: "#9ca3af",
  },
});
