import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { ActivityIndicator, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Settings() {
    const [username, setUsername] = useState('');
    const [randomRepo, setRandomRepo] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [repoData, setRepoData] = useState<any>(null);

    const fetchRandomRepo = async () => {
        if (!username.trim()) {
            setError('Please enter a GitHub username');
            return;
        }

        setLoading(true);
        setError('');
        setRepoData(null);

        try {
            const response = await fetch(`https://api.github.com/users/${username}/repos`);
            if (!response.ok) {
                setError('User not found or has no repositories');
                setLoading(false);
                return;
            }
            const data = await response.json();
            if (data.length === 0) {
                setError('This user has no repositories');
                setLoading(false);
                return;
            }
            const randomIndex = Math.floor(Math.random() * data.length);
            const repo = data[randomIndex];
            setRandomRepo(repo.full_name);
            setRepoData(repo);
        } catch (err) {
            setError('Failed to fetch repositories. Please try again.');
            console.error('Error fetching repositories:', err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <View style={styles.header}>
                <View style={styles.iconContainer}>
                    <Ionicons name="git-branch" size={40} color="#6366f1" />
                </View>
                <Text style={styles.headerTitle}>GitHub Repository Roulette</Text>
                <Text style={styles.headerSubtitle}>Discover random repositories</Text>
            </View>

            <View style={styles.content}>
                <View style={styles.inputSection}>
                    <Text style={styles.label}>GitHub Username</Text>
                    <View style={styles.inputWrapper}>
                        <Ionicons name="person" size={20} color="#9ca3af" style={styles.inputIcon} />
                        <TextInput
                            style={styles.input}
                            placeholder="Enter username..."
                            value={username}
                            onChangeText={(text) => {
                                setUsername(text);
                                setError('');
                            }}
                            placeholderTextColor="#d1d5db"
                            editable={!loading}
                        />
                    </View>
                </View>

                <TouchableOpacity
                    style={[styles.button, loading && styles.buttonDisabled]}
                    onPress={fetchRandomRepo}
                    disabled={loading}
                >
                    {loading ? (
                        <ActivityIndicator color="#ffffff" />
                    ) : (
                        <>
                            <Ionicons name="shuffle" size={20} color="#ffffff" style={styles.buttonIcon} />
                            <Text style={styles.buttonText}>Fetch Random Repo</Text>
                        </>
                    )}
                </TouchableOpacity>

                {error ? (
                    <View style={styles.errorContainer}>
                        <Ionicons name="alert-circle" size={20} color="#ef4444" />
                        <Text style={styles.errorText}>{error}</Text>
                    </View>
                ) : null}

                {repoData ? (
                    <View style={styles.resultCard}>
                        <View style={styles.resultHeader}>
                            <View style={styles.resultIconBox}>
                                <Ionicons name="folder" size={24} color="#6366f1" />
                            </View>
                            <View style={styles.resultTitleSection}>
                                <Text style={styles.resultTitle}>{repoData.name}</Text>
                                <Text style={styles.resultOwner}>{repoData.owner?.login}</Text>
                            </View>
                        </View>

                        {repoData.description ? (
                            <Text style={styles.resultDescription}>{repoData.description}</Text>
                        ) : null}

                        <View style={styles.statsContainer}>
                            <StatItem
                                icon="star"
                                label="Stars"
                                value={repoData.stargazers_count?.toLocaleString() || '0'}
                            />
                            <StatItem
                                icon="shuffle"
                                label="Forks"
                                value={repoData.forks_count?.toLocaleString() || '0'}
                            />
                            <StatItem
                                icon="eye"
                                label="Watches"
                                value={repoData.watchers_count?.toLocaleString() || '0'}
                            />
                        </View>

                        {repoData.language ? (
                            <View style={styles.languageTag}>
                                <View style={styles.languageDot} />
                                <Text style={styles.languageText}>{repoData.language}</Text>
                            </View>
                        ) : null}
                    </View>
                ) : null}
            </View>
        </ScrollView>
    );
}

function StatItem({ icon, label, value }: { icon: string; label: string; value: string }) {
    return (
        <View style={styles.statItem}>
            <Ionicons name={icon as any} size={18} color="#6366f1" />
            <Text style={styles.statLabel}>{label}</Text>
            <Text style={styles.statValue}>{value}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9fafb',
    },
    header: {
        backgroundColor: '#6366f1',
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 30,
        alignItems: 'center',
        borderBottomLeftRadius: 24,
        borderBottomRightRadius: 24,
    },
    iconContainer: {
        width: 70,
        height: 70,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 12,
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: '700',
        color: '#ffffff',
        marginBottom: 4,
    },
    headerSubtitle: {
        fontSize: 14,
        color: '#e0e7ff',
        fontWeight: '500',
    },
    content: {
        padding: 20,
    },
    inputSection: {
        marginBottom: 20,
    },
    label: {
        fontSize: 15,
        fontWeight: '600',
        color: '#111827',
        marginBottom: 8,
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#e5e7eb',
        paddingHorizontal: 12,
    },
    inputIcon: {
        marginRight: 8,
    },
    input: {
        flex: 1,
        height: 48,
        fontSize: 16,
        color: '#111827',
    },
    button: {
        backgroundColor: '#6366f1',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 14,
        borderRadius: 12,
        marginBottom: 16,
        shadowColor: '#6366f1',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 5,
    },
    buttonDisabled: {
        opacity: 0.6,
    },
    buttonIcon: {
        marginRight: 8,
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '600',
    },
    errorContainer: {
        backgroundColor: '#fef2f2',
        borderLeftWidth: 4,
        borderLeftColor: '#ef4444',
        paddingHorizontal: 12,
        paddingVertical: 10,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    errorText: {
        color: '#dc2626',
        marginLeft: 8,
        fontSize: 14,
        fontWeight: '500',
        flex: 1,
    },
    resultCard: {
        backgroundColor: '#ffffff',
        borderRadius: 16,
        padding: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 8,
        elevation: 3,
    },
    resultHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    resultIconBox: {
        width: 48,
        height: 48,
        backgroundColor: '#f3f4f6',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    resultTitleSection: {
        flex: 1,
    },
    resultTitle: {
        fontSize: 17,
        fontWeight: '700',
        color: '#111827',
    },
    resultOwner: {
        fontSize: 13,
        color: '#6b7280',
        marginTop: 2,
    },
    resultDescription: {
        fontSize: 14,
        color: '#4b5563',
        lineHeight: 20,
        marginBottom: 16,
    },
    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#f9fafb',
        borderRadius: 12,
        paddingVertical: 12,
        marginBottom: 12,
    },
    statItem: {
        alignItems: 'center',
    },
    statLabel: {
        fontSize: 12,
        color: '#6b7280',
        marginTop: 4,
        fontWeight: '500',
    },
    statValue: {
        fontSize: 14,
        fontWeight: '700',
        color: '#111827',
        marginTop: 2,
    },
    languageTag: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f3f4f6',
        alignSelf: 'flex-start',
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderRadius: 8,
    },
    languageDot: {
        width: 8,
        height: 8,
        backgroundColor: '#6366f1',
        borderRadius: 4,
        marginRight: 6,
    },
    languageText: {
        fontSize: 12,
        color: '#374151',
        fontWeight: '600',
    },
});