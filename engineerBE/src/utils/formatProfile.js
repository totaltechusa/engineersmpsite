function formatProfile(user) {
    if (!user) return null;
    return {
        id: user._id ? user._id.toString() : (user.id || user.uid),
        uid: user.uid,
        email: user.email,
        fullName: user.fullName,
        gender: user.gender,
        authProvider: user.authProvider || 'local',
        socialId: user.socialId || null,
        serviceList: user.serviceList || [],
        skillsList: user.skillsList || [],
        address: user.address || '',
        city: user.city || '',
        state: user.state || '',
        pincode: user.pincode || '',
        role: user.role,
        status: user.status === 'active' ? 1 : 0,
        raw_status: user.status,
        emailVerified: user.emailVerified,
        created_at: user.createdAt || user.created_at,
        updated_at: user.updatedAt || user.updated_at,
    };
}

module.exports = { formatProfile };
